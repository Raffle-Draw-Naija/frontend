import React from 'react'
import MainContent from '../../noautharea/customComponents/contentContainer';
import { Grid, useMediaQuery, Button } from '@mui/material';
import CustomSearchField from '../../noautharea/customComponents/CustomSearchField';

const RaffleStack = () =>  {
    const isSmallScreen = useMediaQuery('(max-width: 991px)');
  return (
    <MainContent>
        <Grid container direction="column" style={{ padding: '20px', paddingLeft: isSmallScreen ? '4rem' : '16rem' }}>
        <Grid container style={{ margin: '2rem 0' }}>
          <Button
            variant="outlined"
            disabled
            style={{ marginRight: '1rem', fontSize: '15px', fontWeight: '600', color: 'black', border: 'none'}}
          >
            Raffle stake
          </Button>
          <Button
            variant="contained"
            style={{ fontSize: '15px', fontWeight: '600', backgroundColor: '#0000A5'}}
          >
            Select a number
          </Button>
        </Grid>
        </Grid>
    </MainContent>
  )
}

export default RaffleStack;