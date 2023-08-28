import React from 'react';
import PropTypes from 'prop-types';
import { Grid, InputAdornment } from '@mui/material';

import {
  CInputBase, Label, HelperText, CircularProgressLoader
} from './customInputBase.styles';

const CustomInputBase = ({
  label, sideLabel, required, error, loading, helperText, endAdornment, ...props
}) => (
  <Grid item container direction="column">
    <Grid item container justifyContent="space-between">
      {label ? (
        <Label onError={error}>
          {label}
          {' '}
          {required && <span style={{ color: 'red' }}>*</span>}
        </Label>
      ) : ''}
      {sideLabel ? <Label style={{ fontSize: '10px' }}>{sideLabel}</Label> : ''}
    </Grid>
    <CInputBase
      error={error}
      {...props}
      endAdornment={loading ? (
        <InputAdornment position="end">
          <CircularProgressLoader
            disableShrink
            size={18}
            thickness={4}
          />
        </InputAdornment>
      ) : endAdornment}
    />
    {helperText && error ? <HelperText>{helperText}</HelperText> : ''}
  </Grid>
);

CustomInputBase.propTypes = {
  label: PropTypes.string,
  sideLabel: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  endAdornment: PropTypes.element,
  helperText: PropTypes.string,
  props: PropTypes.object,
};

CustomInputBase.defaultProps = {
  label: '',
  sideLabel: '',
  required: false,
  error: false,
  loading: false,
  helperText: '',
  endAdornment: []
};

export default CustomInputBase;
