import React from 'react';
import PropTypes from 'prop-types';
// import { styled } from '@mui/system';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from '@mui/material';
import { Home, Ticket, Desk, Settings, LogOut } from '../../assets/svgs';
import SideNavItem from '../../autharea/components/nagivation/sideNavItem';


// const ContentContainer = styled('div')(({ theme }) => ({
//   marginTop: theme.spacing(12),
//   padding: theme.spacing(2),
// }));

const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MainContent = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
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


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const isLargeScreen = useMediaQuery('(min-width: 992px)');
  return (
    <Box sx={{ display: 'flex' }}>
    <AppBar position="fixed" open={open} style={{ display: isLargeScreen? 'none' : undefined, backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }), fontSize: '18px', fontWeight: 'bold' }}
        >
          <MenuIcon style={{fontSize: '4rem', fontWeight: 'bold', marginTop: '1.5rem', marginLeft: '4rem' }}/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '100%',
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? 
          <ChevronLeftIcon 
           style={{fontSize: '4rem', fontWeight: 'bold', marginTop: '1.5rem', marginLeft: '4rem' }}
          /> : 
          <ChevronRightIcon 
           style={{fontSize: '4rem', fontWeight: 'bold', marginTop: '1.5rem', marginLeft: '4rem' }}
          />}
        </IconButton>
      </DrawerHeader>
      {ADMIN_SIDE_ITEMS.map((sideItem, index) => (
        <SideNavItem sideItem={sideItem} handleSideClick={handleSideClick} key={index} />
       ))}
    </Drawer>
    <Main open={open}>
      <DrawerHeader />
      {children}
    </Main>
  </Box>
  );
};

MainContent.propTypes = {
  children: PropTypes.instanceOf(Object)
};

MainContent.defaultProps = {
  children: {}
};

export default MainContent;
