import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

//Import Components
import Navbar from '../Layout/Navbar';
import Sidebar from '../Layout/Sidebar';
import Breadcrumbs from '../Layout/Breadcrumbs/Home';
import TopBar from '../Layout/Topbar';
import Tabs from '../Layout/Tabs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const NavbarConfig = {
  borderRadius: 0,
  p: 0,
  overflow: 'hidden',
  display: 'flex',
  bgcolor: '#000744',
  mt: -1,
  ml: -1,
  pr: 2,
  width: '100%',
}

const SidebarConfig = {
  mt: -1,
  ml: -1,
  backgroundColor: 'transparent',
  textAlign: 'inherit',
  p: 0,
  color: 'transparent',
  boxShadow: 0,
  width: '66%',
}

const ContentConfig ={

  '@media (min-width: 320px) ': {
    ml: 3.8,
    width: '80%',
    overflowX: 'hidden',
  },
  '@media (min-width: 599px) ': {
    ml: 4,
    width: '82%',
  },
  '@media (min-width: 992px) ': {
    ml: 5.3,
  },
  '@media (min-width: 1024px) ': {
    ml: 19,
  },
  '@media (min-width: 1440px) ': {
    width: '85%',
    ml: 13,
  },
  


}

export default function Home() {
  return (
    <Box sx={{ backgroundColor: '#F6F4F4' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={20}>
          <Item sx={NavbarConfig}><Navbar /></Item>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={1} sx={{  zIndex: 1000,}}>
          <Item sx={SidebarConfig}><Sidebar /></Item>
        </Grid>
        <Grid item xs={11}>
          <Item sx={ContentConfig}>
            <TopBar />
            <Tabs />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
