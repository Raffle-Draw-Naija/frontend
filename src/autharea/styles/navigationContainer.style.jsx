import {
    Grid, IconButton, AppBar
  } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

export const SideNavItems = styled(Grid)`
  margin-top:50px;
  width: 251px;

  @media(max-width: 991px) {
    width: 100%;
    padding-top: 1rem;
  }
`;

export const DrawerContainer = styled(Grid)`
    width: 251px;
    background: white;
    box-shadow: 0px 18px 40px 0px #7090B01F;
    @media(max-width: 991px) {
      width: 100%;
      z-index: 10000;
    }
  }
`;

export const LogOutButton = styled(IconButton)`
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 25px;
    margin-left: 4%;
    width: 93%;
    justify-content: flex-start;
    border-radius: 0.5rem;
    color: #F05A5A;
    background-color: #EBD7D8;
  
    @media(max-width: 991px) {
      width: 85%;
      height: 160px;
      margin: auto auto auto 3rem;
      padding: 2rem 25px;
    }
`;

export const NavbarContainer = styled(({
    color, theme, open, ...otherProps
  }) => (
    <AppBar {...otherProps} />
  ))`
    transition: ${(props) => props.theme.transitions.create(['margin', 'width'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.leavingScreen
    })};
    background: white;
    box-shadow: 0px 4px 8px rgba(214, 219, 230, 0.25);
    z-index: 10000000;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 82.5%;
    @media(max-width: 991px) {
      width: 100%;
    }
`;

export const NavRightMenu = styled(Grid)`
   display: flex;
`;