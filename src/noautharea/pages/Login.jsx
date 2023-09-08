
import React, { useState } from 'react'
import { Grid, Hidden, useMediaQuery, Box, Button, CircularProgress } from '@mui/material';
import AppLogo from '../../assets/images/AppLogo.svg'
import PasswordTextField from '../../autharea/passwordTextField'
import { validateEmail, validatePassword } from '../../utils/utils';
import { GridLogin, LogoTypo } from '../styles/pages/Login.styles'
import CustomInputBase from '../customComponents/customInputBase'

const Login = () => {
    const isSmall = useMediaQuery('(max-width: 991px)');
    const initialState = {
        email: '',
        password: '',
        validated: false,
    };
    const initialErrorState = {
        emailError: false,
        passwordError: false,
    };

    const [state, setState] = useState(initialState);
    const [errorState, setErrorState] = useState(initialErrorState);

    const {
        email, password, validated
    } = state;
    const { emailError, passwordError } = errorState;

    const validateState = (name, value) => {
        if (name === 'email') {
          return setErrorState({
            ...errorState,
            emailError: validateEmail(value)
          });
        }
        if (name === 'password') {
          return setErrorState({
            ...errorState,
            passwordError: validatePassword(value)
          });
        }
        return null;
    };

    React.useEffect(() => {
        setState({
          ...state,
          validated: !emailError && !passwordError && !!email && !!password
        });
    }, [email, password]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email' || name === 'password') {
          validateState(name, value);
          setState({ ...state, [name]: value });
        }
    };

    const loading = false;
    
    return (
        <Grid container>
            <Box paddingY={5} sx={{ width: '100%', textAlign: 'center' }} style={{ marginTop: '5rem' }}>
                <Box>
                   <img 
                    src={AppLogo} 
                    alt="App Logo" 
                    width={140} 
                   />    
                </Box>
                <LogoTypo variant="h1">Welcome Back!</LogoTypo>
                <Grid container spacing={2} style={{ marginLeft: isSmall ? '3rem' : '33rem', display: 'grid' }}>
                    <Grid item xs={11} lg={3}> 
                        <CustomInputBase
                            label="Email Address"
                            name="email"
                            value={email}
                            type="email"
                            error={email ? emailError : false}
                            helperText={emailError ? 'Invalid email' : ' '}
                            placeholder="Enter your email"
                            required
                            onChange={handleChange}
                            cSize="lg"
                            data-testid="auth-email"
                            className="signin-email"
                            id="signin-email" sideLabel={undefined} loading={undefined} endAdornment={undefined}                        />
                   </Grid>
                    <Grid item xs={11} lg={3}>
                        <PasswordTextField
                        password={password}
                        handleChange={handleChange}
                        passwordError={passwordError}
                        />
                    </Grid>
                    <Grid item xs={11} lg={3}>
                        <Button
                            data-testid="auth-button"
                            disabled={!validated}
                            type="submit"
                            variant="contained"
                            style={{
                                ...(validated) ?
                                { backgroundColor: '#0000A5', width: '100%', height: isSmall ? '5rem' : '', fontSize: isSmall ? '1.5rem' : '', borderRadius: isSmall ? '1rem' : ''}
                                : {backgroundColor: 'red', color: 'white', width: '100%', height: isSmall ? '5rem' : '', fontSize: isSmall ? '1.5rem' : '', borderRadius: isSmall ? '1rem' : ''}
                            }}
                            className="signin-button"
                            id="signin-button"
                        >
                            {loading ? <CircularProgress size={18} /> : 'Login In'}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Login