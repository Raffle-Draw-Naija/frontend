import React from 'react';
import PropTypes from 'prop-types';
import {
  useMediaQuery, InputAdornment
} from '@mui/material';
import {
  CTextField, CButton, ArrowRightIcon, CInputAdornment, CircularProgressLoader
} from './styles';

const CustomNewTextField = ({
  name, value, handleChange, loading, adornmentButtonText, adornmentButtonFunc, ...props
}) => {
  const isLarge = useMediaQuery('(min-width:992px)');

  return (
    <CTextField
      {...props}
      variant="outlined"
      value={value}
      name={name}
      size={isLarge ? 'small' : 'medium'}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <>
            {adornmentButtonText && (
              <CInputAdornment position="start">
                <CButton variant="text" onClick={adornmentButtonFunc}>
                  {adornmentButtonText}
                  <ArrowRightIcon />
                </CButton>
              </CInputAdornment>
            )}
          </>
        ),
        endAdornment: loading ? (
          <InputAdornment position="end">
            <CircularProgressLoader
              disableShrink
              size={18}
              thickness={4}
            />
          </InputAdornment>
        ) : ''
      }}
    />
  );
};

CustomNewTextField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  loading: PropTypes.bool,
  adornmentButtonText: PropTypes.string,
  adornmentButtonFunc: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
};

CustomNewTextField.defaultProps = {
  name: '',
  value: '',
  adornmentButtonText: '',
  adornmentButtonFunc: () => {},
  loading: false,
};

export default CustomNewTextField;
