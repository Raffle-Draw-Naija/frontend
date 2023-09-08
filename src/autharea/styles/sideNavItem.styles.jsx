import {
    Grid, Typography, IconButton, Divider
  } from '@mui/material';
import { styled } from '@mui/material/styles';
  
export const SideGrid = styled(Grid)`
    align-items: center;
    margin-bottom: 1rem;
  
    &:hover {
      & > hr {
        background-color: #F1F8FF;
      }
    }
    @media(max-width: 991px) {
      margin-bottom: 3rem;
    }
`;

  
export const SideNavButton = styled(IconButton)`
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 25px;
    margin-left: 4%;
    width: 93%;
    justify-content: flex-start;
    border-radius: 0.5rem;
    color: ${({ 
// @ts-ignore
    active }) => (active ? 'white' : '#6F757E')};
    background-color: ${({ 
// @ts-ignore
    active }) => (active ? '#0000A5' : 'white')};
    
  
    &:hover {
      background-color: #0000A5;
      color: white;
  
      & > svg {
        color: white !important;
      }
    }
  
    @media(max-width: 991px) {
      width: 85%;
      height: 160px;
      margin: auto auto auto 3rem;
      padding: 2rem 25px;
    }
`;
  
export const SideNavText = styled(Typography)`
    margin-left: 2rem;
    font-size: 35px;
    font-weight: 500;
    text-transform: capitalize;
  
    @media(min-width: 992px) {
      margin-left: 20px;
      font-size: 14px;
    }
`;
  