import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

export const GridLogin =  styled(Grid)`

@media (max-width: 991px) {
    margin: 0.5rem;
  }

`;

export const LogoTypo = styled(Typography)`
  font-size: 3.48vw;
  font-weight: 700;
  margin: 3.8vw auto 0;

  @media (min-width: 768px) {
    font-size: 3.82vw;
    margin: 2vw auto;
  }

  @media (min-width: 992px) {
    font-size: 2.1vw;
    margin: 4vw auto;
  }


  @media (max-width: 991px) {
    font-size: 1.5rem;
  }
`;