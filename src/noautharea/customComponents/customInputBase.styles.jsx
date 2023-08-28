import { InputBase, Typography, CircularProgress } from '@mui/material';

import { styled } from '@mui/material/styles';


export const CInputBase = styled(InputBase)`
  border: ${({ error }) => (error ? '1.3px solid #BA1A1A' : '1.3px solid black')};
  background: ${({ disabled }) => (disabled ? '#F3F9FF' : '')};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 3.2;
  @media(max-width: 991px) {
    font-size: 2rem;
    border-radius: 1rem;
    border: 1px solid black;
    font-weight: 500;
     & .MuiInputBase-input {
      height: 3.5rem
    }
  }
  

  & .MuiInputBase-input {
    padding: ${({ cSize }) => (cSize === 'lg' ? '16px' : '12px')};
    padding-right: 5px;
  }
  & .MuiInputAdornment-positionEnd {
    margin-right: 8px;
    margin-left: 8px;
  }

  & .MuiSvgIcon-root {
    color: #606060;
  }

  &:active, &:focus, &:focus-within {
    border: ${({ error }) => (error ? '1.3px solid #BA1A1A' : '1.3px solid black')};

    & .MuiSvgIcon-root {
      color: black;
    }
  }

  @media(max-width: 991px) {
    & .MuiInputBase-input {
      height: 3rem;
      font-size: 1.5rem;
    }
  }
`;

export const Label = styled(Typography)`
  font-size: 14px;
  font-weight: 800;
  color: ${({ onError }) => (onError ? '#BA1A1A' : '#303030')};
  margin-bottom: .2rem;
  @media(max-width: 991px) {
    font-size: 1rem;
  }
`;

export const HelperText = styled(Typography)`
  font-size: 12px;
  color: #ff0000;
  opacity: 0.8;
  margin-left: 10px;
`;

export const CircularProgressLoader = styled(CircularProgress)`
  color: #606060;
  margin-top: 4px;
`;
