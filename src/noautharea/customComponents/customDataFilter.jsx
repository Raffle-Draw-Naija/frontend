import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Grid } from '@mui/material';
import RangePicker from 'react-range-picker';
import { PlaceholderInput } from './customDateFilter.styles';
import { Calender } from '../../assets/svgs';

export const CustomDateRanges = ({
  handleSubmit, xs, styles, defaultRange
}) => {
  const { dateFrom: rangeFrom, dateTo: rangeTo } = defaultRange;
  const [dateRange, setDateRange] = useState({
    dateFrom: rangeFrom || moment().startOf('day'),
    dateTo: rangeTo || moment().endOf('day')
  });

  function dateChangeHandler(start, end) {
    setDateRange({
      dateFrom: start,
      dateTo: end
    });
  }

  const handleRange = () => {
    const { dateFrom, dateTo } = dateRange;
    handleSubmit({ dateFrom, dateTo });
  };

  const placeholder = () => {
    const { dateFrom, dateTo } = dateRange;

    return (
      <PlaceholderInput item container style={styles}>
        <Calender style={{ fontSize: '.9rem', margin: '0 0.5rem' }} />
        {`${dateFrom && moment(dateFrom).format('ll')} `}
        &nbsp;-&nbsp;
        {` ${dateTo && moment(dateTo).format('ll')}`}
      </PlaceholderInput>
    );
  };

  return (
    <Grid item container xs={xs}>
      <RangePicker
        placeholder={placeholder}
        onDateSelected={(start, end) => dateChangeHandler(start, end)}
        onClose={handleRange}
        rangeTillEndOfDay
      />
    </Grid>
  );
};

CustomDateRanges.propTypes = {
  xs: PropTypes.number,
  styles: PropTypes.instanceOf(Object),
  handleSubmit: PropTypes.func.isRequired,
  defaultRange: PropTypes.instanceOf(Object)
};

CustomDateRanges.defaultProps = {
  xs: 5,
  styles: {},
  defaultRange: {}
};

export default CustomDateRanges;
