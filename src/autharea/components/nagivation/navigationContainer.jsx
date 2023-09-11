import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SideNavItem from './sideNavItem'
import { Box, useMediaQuery, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Home, Ticket, Desk, Settings, LogOut } from '../../../assets/svgs'
import { 
    SideNavItems, DrawerContainer, LogOutButton, NavbarContainer, NavRightMenu
} from '../../styles/navigationContainer.style'
import AppLogo from '../../../assets/images/AppLogo.svg'
import { SideNavText } from '../../styles/sideNavItem.styles'
import CustomSearchField from '../../../noautharea/customComponents/CustomSearchField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FilterAdd } from '../../../assets/svgs';


const NavigationContainer = () => {
    const navigate = useNavigate();
    const [tag, setTag] = useState('');
    const isSmallScreen = useMediaQuery('(max-width: 991px)');
    const [searchState, setSearchState] = useState('');
    const location = useLocation();
    const { pathname } = location;
    const ADMIN_SIDE_ITEMS = [
        ['dashboard', Home, 'Dashboard'],
        ['raffle-stake', Ticket, 'Raffle Stake'],
        ['stack-price', Desk, 'Stack Price'],
        ['settings', Settings, 'Settings'],
        
    ];
    const handleChange = (event) => {
        setTag(event.target.value);
      };
    const names = [
        'Keke Napepe',
        'Mini Bus',
        'Bike Machine',
        'Machines',
        'Tools',
    ];

    const handleSideClick = (route) => {
        setTimeout(() => {
          navigate(`/${route}`);
        }, 500);
      };

  return (
    <>
    <NavbarContainer theme={useTheme()} style={{display: isSmallScreen ? 'none' : undefined}}>
      {pathname?.slice(1) === "raffle-stake" ?
        <>
            <CustomSearchField
                name="search"
                value={searchState}
                placeholder="Search..."
                handleChange={(e) => setSearchState(e?.target?.value)}
                lg={5}
                style={{ width: '40rem', margin: '1.5rem 0 0 2rem' }} 
            />
            <Grid item xs={12} md={6} style={{ margin: '0 0 0 2rem' }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ width: '14rem', }}>
                    <InputLabel id="demo-select-small-label" style={{marginTop: '1rem'}}>Sort</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={tag}
                        label="tag"
                        onChange={handleChange}
                        style={{marginTop: '1rem', borderRadius: '3rem', height: '2.8rem'}}
                    >
                    {names.map((name, index) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={{ marginTop: index === 0 ? '1.5rem' : '0' }}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                </FormControl>
            </Grid>
            <Button
                variant="outlined"
                style={{ 
                    fontSize: '15px', 
                    fontWeight: '400', 
                    color: 'black', 
                    border: '0.9px solid #9FA3A9',
                    width: '13rem',
                    height: '2.8rem',
                    marginTop: '1.5rem',
                    borderRadius: '25px'
                }}
                > 
              Filter
              <FilterAdd />
            </Button>
        </>
        : null
       }
       <NavRightMenu item container justifyContent="flex-end">
            <img
                src={AppLogo}
                alt="User Pic"
                width={70}
                style={{ margin: '20px' }} 
            />
            <Grid style={{ width: '10rem' }}>
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