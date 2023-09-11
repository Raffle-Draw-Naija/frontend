import {
  Button, TextField, InputAdornment, CircularProgress
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';

export const CTextField = styled(TextField)`
  font-size: .75rem;

  & .MuiOutlinedInput-input {
    padding-top: 14px;
    padding-bottom: 14px;
    margin-left: 0.5rem;
  }
  & .MuiOutlinedInput-root {
    border-radius: 8px;
    padding-left: 0;
  }
  & .MuiInputBase-root {
    font-size: .8rem;
  }
  & .MuiFormLabel-root {
    font-size: .75rem;
    font-weight: 500;
    line-height: 1.45rem;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid #E7E8E9;
  }

  @media(max-width: 991px) {
    & .MuiFilledInput-input {
      font-size: 2rem;
      height: 3.8rem;
      padding: 35px 20px 10px;
    }
    & .MuiInputLabel-filled.MuiInputLabel-shrink {
        transform: translate(20px, 12px) scale(1.5);
    }

    & .MuiInputBase-root {
      font-size: 2rem;
      height: 6rem;
      border-radius: 20px
    }
  }
`;

export const CInputAdornment = styled(InputAdornment)`
  margin-right: 0;
  padding: 1.5rem .2rem 1.5rem .85rem;
  background: #F1F8FF;
`;

export const CButton = styled(Button)`
  padding: 0;
  color: #303030;
  font-size: 14px;
  font-weight: 600;
`;

export const ArrowRightIcon = styled(KeyboardArrowRightIcon)`
  font-size: 22px;
  margin-left: 5px;
`;

export const SearchImg = styled('img')`
  width: 25px;

  @media(max-width: 991px) {
    width: 50px;
  }
`;

export const CircularProgressLoader = styled(CircularProgress)`
  color: #606060;
  margin-top: 4px;
`;
