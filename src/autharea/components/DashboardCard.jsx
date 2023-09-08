import React, { useState } from 'react'
import { Grid,  Button, useMediaQuery } from '@mui/material';
import moment from 'moment';
import { PrimaryTitle, Primary, CardGrid, PrimaryBox, GridBox,PrimaryBoxis,
    PrimaryTextBold, PrimaryText, CardGridSmall }  from '../styles/Dashboard.styles'
import { IconD, IconS } from '../../assets/svgs'
import CustomDateFilter from '../../noautharea/customComponents/customDataFilter'

const DashboardCard = () => {
  const isSmallScreen = useMediaQuery('(max-width: 991px)');
  const isLargeScreen = useMediaQuery('(min-width: 992px)');
  const startDate = moment().startOf('day');
  const endDate = moment().endOf('day');
  const [dateFilter, setDateFilter] = useState({
    dateFrom: startDate,
    dateTo: endDate
  });

  const handleSubmit = (dateRange) => {
    const { dateFrom, dateTo } = dateRange;
    setDateFilter({
      dateFrom,
      dateTo
    });
  };

  const { dateFrom, dateTo } = dateFilter

  return (
      <Grid container>
        <PrimaryTitle>Welcome Back!</PrimaryTitle>
        <Grid container style={{ margin: '2rem 0' }}>
          <Button
            variant="contained"
            style={{ marginRight: '.8rem', fontSize: '15px', fontWeight: '600', backgroundColor: '#0000A5'}}
          >
            Month
          </Button>
          <Button
            variant="contained"
            style={{ fontSize: '15px', fontWeight: '600', backgroundColor: '#757584' }}
          >
            Week
          </Button>

          <Grid item alignItems="center" style={{ marginLeft: isSmallScreen? '23rem' : '14rem'}} >
            <CustomDateFilter
              handleSubmit={handleSubmit}
              xs={12}
            />
          </Grid>
        </Grid>
        <CardGrid container item style={{ display: isSmallScreen? 'none' : undefined}}>
        <Primary>
        <PrimaryBox paddingX={8}>
          <IconD
            style={{
             fontSize: '2.5rem',
             marginRight: '1rem',
             marginTop: '0.5rem',
            }}
          />
          <GridBox>
           <PrimaryText>Total No. of stakes</PrimaryText>
           <PrimaryTextBold>20</PrimaryTextBold>
          </GridBox>
        </PrimaryBox>
      </Primary>
           <Primary>
             <PrimaryBox paddingX={8}>
               <IconS 
                 style={{
                  fontSize: '2.5rem',
                  marginRight: '1rem',
                  marginTop: '0.5rem',
                 }}
               />
               <GridBox>
                <PrimaryText>Total Funds Disbursed</PrimaryText>
                <PrimaryTextBold>&#8358;566</PrimaryTextBold>
               </GridBox>
             </PrimaryBox>
           </Primary>
           <Primary>
             <PrimaryBox paddingX={8}>
               <IconS 
                 style={{
                  fontSize: '2.5rem',
                  marginRight: '1rem',
                  marginTop: '0.5rem',
                 }}
               />
               <GridBox>
                <PrimaryText>Total Funds Made</PrimaryText>
                <PrimaryTextBold>&#8358;566</PrimaryTextBold>
               </GridBox>
             </PrimaryBox>
           </Primary>
        </CardGrid>
        <CardGridSmall container item style={{ display: isLargeScreen? 'none' : undefined, margin: '2rem 0', marginRight: '5rem' }}>
            <PrimaryBoxis style={{ padding: '20px'}}>
            <IconD
              style={{
              fontSize: '2.5rem',
              marginRight: '1rem',
              marginTop: '0.5rem',
              }}
            />
            <GridBox>
            <PrimaryText>Total No. of stakes</PrimaryText>
            <PrimaryTextBold>20</PrimaryTextBold>
            </GridBox>
          </PrimaryBoxis>
            <Primary>
            <PrimaryBoxis style={{ padding: '15px'}}>
              <IconS 
                style={{
                fontSize: '2.5rem',
                marginRight: '1rem',
                marginTop: '0.5rem',
                }}
              />
              <GridBox>
              <PrimaryText>Total Funds Disbursed</PrimaryText>
              <PrimaryTextBold>&#8358;566</PrimaryTextBold>
              </GridBox>
            </PrimaryBoxis>
          </Primary>
            <Primary>
              <PrimaryBoxis style={{ padding: '20px'}}>
              <IconS 
                style={{
                fontSize: '2.5rem',
                marginRight: '1rem',
                marginTop: '0.5rem',
                }}
              />
              <GridBox>
              <PrimaryText>Total Funds Made</PrimaryText>
              <PrimaryTextBold>&#8358;566</PrimaryTextBold>
              </GridBox>
            </PrimaryBoxis>
            </Primary>
        </CardGridSmall>
       </Grid>
  )
}

export default DashboardCard