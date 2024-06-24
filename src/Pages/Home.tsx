import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, Paper, styled, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Home'
import Sidebar from '../Layout/Sidebar';
import TopBar from '../Layout/Topbar';
import Tabs from '../Layout/Tabs';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
      <Box sx={{ textAlign: 'center', color: 'red', fontStyle: 'bold', width: 1, ml: 1 }}>
          VERSÃO DEMONSTRATIVA
      </Box>
    </Grid>
  </Box>
  );
}
