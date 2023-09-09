import React, {useState} from 'react'
import MainContent from '../../noautharea/customComponents/contentContainer'
import { Grid, useMediaQuery } from '@mui/material';
import DashboardCard from '../components/DashboardCard'
import MPieChart from '../components/MPieChart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Dashboard = () =>  {
  const [tag, setTag] = useState('');
  const isSmallScreen = useMediaQuery('(max-width: 991px)');
  const [satValue, setsatValue] = useState([]);
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
  return (
    <MainContent>
       <Grid container direction="column" style={{ padding: '20px', paddingLeft: isSmallScreen ? '4rem' : '16rem' }}>
        <DashboardCard />
        <Grid container style={{ marginTop: isSmallScreen ? '4rem' : undefined }}>
        <h5>Wining tag</h5>
        <Grid item xs={12} md={6} style={{ marginLeft: '1rem' }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Tag</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={tag}
              label="tag"
              onChange={handleChange}
            >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
            </Select>
          </FormControl>
        </Grid>
        </Grid>
        <Grid>
          <MPieChart  />
        </Grid>
       </Grid>
    </MainContent>
  )
}

export default Dashboard