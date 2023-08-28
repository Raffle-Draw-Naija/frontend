import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const VisIcon = styled(VisibilityIcon)`
  font-size: 3rem;

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const VisOffIcon = styled(VisibilityOffIcon)`
  font-size: 3rem;

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;
