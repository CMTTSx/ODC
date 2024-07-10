import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, } from '@mui/material';

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Home'
import Sidebar from '../Layout/Sidebar';
import TopBar from '../Layout/Topbar';
import Tabs from '../Layout/Tabs';

const BoxConfig = {
  backgroundColor: '#F6F4F4',

  '@media (min-width: 320px) ': {
    height: '50rem',
  },
  '@media (min-width: 2560px) ': {
    height: '100rem'
  },

}

export default function Home() {
  return (
    <Box sx={BoxConfig}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={20} >
          <Navbar />
          <Breadcrumbs />
        </Grid>
        <Grid item xs={1} sx={{ zIndex: 1000, }}>
          <Sidebar />
        </Grid>
        <Grid item xs={11}>
          <TopBar />
          <Tabs />
        </Grid>
        <Box sx={{ textAlign: 'center', color: 'red', fontStyle: 'bold', width: 1, ml: 1, pt: 5, }}>
          VERSÃO DEMONSTRATIVA
        </Box>
      </Grid>
    </Box>
  );
}
