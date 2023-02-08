import * as React from 'react';
import Box from '@mui/material/Box';


//Import Components
import Navbar from '../Layout/Navbar';
import Sidebar from '../Layout/Sidebar';
import Breadcrumbs from '../Layout/Breadcrumbs/Home';
import TopBar from '../Layout/Topbar';
import Tabs from '../Layout/Tabs';
import { Grid } from '@mui/material';

const BoxConfig = {
  maxHeight: '20em',
}

const TabsConfig = {
    width: '50em',
    mt: 30,
    ml: -70,
    mr: 'auto',
    zIndex: 1,

    '@media (min-width: 320px) and (max-width: 375px)': {
        width: '319px'
    }

}


export default function Home() {
  return (
    <Box sx={{BoxConfig}}>
      <Navbar />
      <Breadcrumbs />
      <Box sx={{ backgroundColor: '#fff' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}  sx={{zIndex: 1000}}>
            <Box><Sidebar /></Box>
          </Grid>
          <Box> <TopBar /> </Box>
          <Box sx={TabsConfig}>
                <Tabs />
          </Box>
        </Grid></Box>
    </Box>
  );
}