import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import {
  SideNavText, SideGrid, SideNavButton
} from '../../styles/sideNavItem.styles';

export const SideNavItem = ({
  // @ts-ignore
  sideItem, handleSideClick
}) => {
  const isSmallScreen = useMediaQuery('(max-width: 991px)');
  const [isHovered, setIsHovered] = useState(false); 

  const location = useLocation();
  const { pathname } = location;


  const [route, SvgIco, title] = sideItem;

  return (
    <SideGrid item container>
      <SideNavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disableRipple
        onClick={() => handleSideClick(route)}
        // @ts-ignore
        active={route === pathname?.slice(1)}
      >
        <SvgIco
          style={{
            fontSize: isSmallScreen ? '4rem' : '1.5rem',
            marginLeft: isSmallScreen && '2rem', fill: 'none'
          }}
          color={isHovered || sideItem[0] === pathname?.slice(1) ? '#F1F8FF' : '#6F757E'}
        />
        <SideNavText>{title}</SideNavText>
      </SideNavButton>
    </SideGrid>
  );
};

SideNavItem.propTypes = {
  sideItem: PropTypes.array,
  handleSideClick: PropTypes.func.isRequired,
};

SideNavItem.defaultProps = {
  sideItem: [],
};

export default SideNavItem;
