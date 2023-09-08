import React, { useState } from 'react';
import { Box, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
    NavbarContainer, NavRightMenu
} from '../../styles/navigationContainer.style'
import AppLogo from '../../../assets/images/AppLogo.svg'

const TopNavItem = () => {
  const isSmall = useMediaQuery('(max-width: 991px)');
  return (
  <NavbarContainer theme={useTheme()}>
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
  )
}

export default TopNavItem;