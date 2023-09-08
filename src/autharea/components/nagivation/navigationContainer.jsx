import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavItem from './sideNavItem'
import { Box, useMediaQuery, Grid, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Home, Ticket, Desk, Settings, LogOut } from '../../../assets/svgs'
import { 
    SideNavItems, DrawerContainer, LogOutButton, NavbarContainer, NavRightMenu
} from '../../styles/navigationContainer.style'
import AppLogo from '../../../assets/images/AppLogo.svg'
import { SideNavText } from '../../styles/sideNavItem.styles'


const NavigationContainer = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 991px)');
    const ADMIN_SIDE_ITEMS = [
        ['dashboard', Home, 'Dashboard'],
        ['raffle-stake', Ticket, 'Raffle Stake'],
        ['stack-price', Desk, 'Stack Price'],
        ['settings', Settings, 'Settings'],
        
    ];

    const handleSideClick = (route) => {
        setTimeout(() => {
          navigate(`/${route}`);
        }, 500);
      };

  return (
    <>
    <NavbarContainer theme={useTheme()} style={{display: isSmallScreen ? 'none' : undefined}}>
       <NavRightMenu paddingX={110}>
            <img
                src={AppLogo}
                alt="User Pic"
                width={70}
                style={{ margin: '20px' }} 
            />
            <Grid>
              <p style={{ color: 'black', width: '300px', marginTop: '25px', fontWeight: '600' }}>User Name</p>
              <p style={{ color: '#9FA3A9' }}>Admin</p>
            </Grid>
       </NavRightMenu>
  </NavbarContainer>
    <DrawerContainer style={{ height: '100vh', position: 'fixed', display: isSmallScreen ? 'none' : undefined }}>
          <Box paddingX={8}>
              <img
                  src={AppLogo}
                  alt="App Logo"
                  width={120}
                  style={{ marginTop: '50px' }} />
          </Box>
          <SideNavItems>
              {ADMIN_SIDE_ITEMS.map((sideItem, index) => (
                  <SideNavItem sideItem={sideItem} handleSideClick={handleSideClick} key={index} />
              ))}
          </SideNavItems>
          <LogOutButton style={{ marginTop: '150px' }}>
              <LogOut
                  style={{
                      fontSize: isSmallScreen ? '4rem' : '1.5rem',
                      marginLeft: isSmallScreen && '2rem', fill: 'none'
                  }} />
              <SideNavText>Log out</SideNavText>
          </LogOutButton>
      </DrawerContainer>
      </>
  )
}

export default NavigationContainer