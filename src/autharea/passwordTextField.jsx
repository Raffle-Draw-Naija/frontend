import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton, InputAdornment
} from '@mui/material';
import {
  VisIcon, VisOffIcon
} from './styles/passwordTextField.styles';
import CustomInputBase from '../noautharea/customComponents/customInputBase';

const PasswordTextField = ({
  password, handleChange, passwordError, loading
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <CustomInputBase
      label="Password"
      name="password"
      type={showPassword ? 'text' : 'password'}
      required
      value={password}
      onChange={handleChange}
      error={password ? passwordError : false}
      data-testid="auth-password"
      disabled={loading}
      placeholder="Enter your password"
      className="signin-password"
      cSize="lg"
      id="signin-password"
      endAdornment={(
        <InputAdornment position="end">
          <IconButton
            aria-label="Toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            size="large"
            disableRipple
            style={{ color: 'black' }}
          >
            {showPassword ? <VisIcon /> : <VisOffIcon />}
          </IconButton>
        </InputAdornment>
      )}
      helperText={passwordError
        ? 'Should be atleast 8 characters. UPPERCASE, lowercase, letters & numbers'
        : ' '} sideLabel={undefined} loading={undefined}    />
  );
};

PasswordTextField.propTypes = {
  password: PropTypes.string,
  passwordError: PropTypes.bool,
  loading: PropTypes.bool,
  handleChange: PropTypes.func.isRequired
};

PasswordTextField.defaultProps = {
  password: '',
  passwordError: false,
  loading: false,
};

export default PasswordTextField;
