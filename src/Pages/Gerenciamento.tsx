import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Gerenciamento';
import Sidebar from '../Layout/Sidebar';
import GerenciamentoPopover from '../Layout/GerenciamentoPopover';
import AdicionarPerfilModal from '../Layout/AdicionarPerfilModal';

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

const ContentConfig = {
  overflowX: 'hidden',

  '@media (min-width: 320px) ': {
    ml: 3.8,
    width: '83%',

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
    height: 'auto',
    ml: 13,
  },

}

const TypoGerenciamento = {
  fontSize: 35,
  color: '#000000',
  mt: 10,
  ml: 'auto',
  mr: 'auto',
  fontWeight: 600,

  '@media (min-width: 320px) ': {
    fontSize: 25,
    mt: 2,
  },
  '@media (min-width: 1024px) ': {
    fontSize: 35,
  },


}

const BoxConfig = {
  border: 1,
  ml: 'auto',
  mr: 'auto',
  mt: 4,
  mb: 1,
  width: '60%',
  height: '4.5em',

  '@media (min-width: 320px) ': {
    ml: 2,
    width: '90%',
  },
  '@media (min-width: 1023px) ': {
    width: '60%',
    ml: 'auto',
    mr: 'auto',
  },
  '@media (min-width: 2560px) ': {
    width: '40%',
    ml: 'auto',
    mr: 'auto',
  },
  '@media (min-width: 3840px) ': {
    width: '30%',
    ml: 'auto',
    mr: 'auto',
  },


}

const TypoProfile = {
  textAlign: 'start',
  pl: 2,
  mt: 1.6,
  fontSize: 18,
  fontWeight: 600,
  color: '#000000',


}

const TypoName = {
  textAlign: 'start',
  color: '#000000',
  pl: 3.5,
  pt: -2,


}



const PopoverConfig = {
  ml: -6,
  mt: -0.5,

  '@media (min-width: 320px) ': {
    ml: -80,
    mt: -0.5,
  },
  '@media (min-width: 375px) ': {
    ml: -76,
    mt: -0.5,
  },
  '@media (min-width: 425px) ': {
    ml: -72,
    mt: -0.5,
  },
  '@media (min-width: 600px) ': {
    ml: -60,
    mt: -0.5,
  },
  '@media (min-width: 768px) ': {
    ml: -48,
    mt: -0.5,
  },
  '@media (min-width: 1024px) ': {
    ml: -52,
    mt: -0.5,
  },
  '@media (min-width: 1280px) ': {
    ml: -38,
    mt: -0.5,
  },
  '@media (min-width: 1440px) ': {
    ml: -30,
    mt: -0.5,
  },
  '@media (min-width: 1920px) ': {
    ml: -6,
    mt: -0.5,
  },
  '@media (min-width: 2560px) ': {
    ml: -10,
    mt: -0.5,
  },
  '@media (min-width: 3840px) ': {
    ml: -6,
    mt: -0.5,
  },

}




export default function Gerenciamento() {
  return (
    <Box sx={{ backgroundColor: '#F6F4F4' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={20}>
          <Item sx={NavbarConfig}><Navbar /></Item>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={1} sx={{ zIndex: 1000, }}>
          <Item sx={SidebarConfig}><Sidebar /></Item>
        </Grid>
        <Grid item xs={11}>
          <Item sx={ContentConfig}>

            <Typography sx={TypoGerenciamento}>Gerenciamento de Usuários</Typography>

            <Box sx={BoxConfig}>
              <Typography sx={TypoProfile}>Administrador(a)</Typography>

              <Typography sx={TypoName}>Fabíola T. Reis</Typography>

              <Box sx={PopoverConfig}><GerenciamentoPopover /></Box>

            </Box>

            <Button><AdicionarPerfilModal /></Button>

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
