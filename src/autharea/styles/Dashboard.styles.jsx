import { styled } from '@mui/material/styles';
import {
   Typography, Grid, Box
} from '@mui/material';

export const PrimaryTitle = styled(Typography)`
  font-size: 2.2rem;
  font-weight: 700;
  color: #303030;

  @media(min-width: 992px) {
    font-size: 24px;
  }
`;

export const Primary = styled(Typography)`
`;

export const PrimaryText = styled(Typography)`
  color: #9FA3A9;
  font-size: 0.9em;
`;

export const PrimaryTextBold = styled(Typography)`
  font-size: 1.2em;
  font-weight: 900;
  color: #0F1928;
`;

export const PrimaryBox = styled(Box)`
  font-size: 1rem;
  font-weight: 500;
  color: #303030;
  display: flex;
  justify-content: space-between;
`;

export const PrimaryBoxis = styled(Box)`
  font-size: 1rem;
  font-weight: 500;
  color: #303030;
  box-shadow: 0px 4px 20px 0px #0000001A;
  width: 171px;
  height: 140px;
  border-radius: 20px;
`;

export const GridBox = styled(Box)`
  display: grid;
`;

export const CardGrid = styled(Grid)`
  box-shadow: 0px 18px 40px 0px #7090B01F;
  display: flex;
  width: 75vw;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 2rem;
  align-items: center;
  padding: 25px;
  border-radius: 10px;
`;

export const CardGridSmall = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;
