import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Clientes';
import Sidebar from '../Layout/Sidebar';
import AdicionarCliente from '../Layout/AdicionarClienteModal';
import { BsSearch } from 'react-icons/bs';


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

  '@media (min-width: 320px) ': {
    ml: 3.8,
    width: '83%',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  '@media (min-width: 599px) ': {
    ml: 4,
    width: '82%',
    overflowX: 'hidden',
  },
  '@media (min-width: 992px) ': {
    ml: 5.3,
    overflowX: 'hidden',
  },
  '@media (min-width: 1024px) ': {
    ml: 19,
    overflowX: 'hidden',
  },
  '@media (min-width: 1440px) ': {
    width: '85%',
    ml: 13,
  },

}


function SearchButton() {
  alert("Botão de Pesquisar Cadastros!");
}


const Typoclientes = {
  fontSize: 35,
  fontWeight: 600,
  color: '#000000',
  mt: 10,
  ml: 'auto',
  mr: 'auto',

  '@media (min-width: 320px) ': {
    mt: 1,
    mb: 3,
  },

}

const InputConfig = {
  display: 'flex',
  width: '50em',
  ml: 'auto',
  mr: 'auto',
  mt: 0,

  '@media (min-width: 320px) ': {
    width: '100%',
  },
  '@media (min-width: 1920px) ': {
    width: '50em',
  },

}

const ButtonAddConfig = {
  ml: 0,
  mt: 2,


}



export default function Clientes() {
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


            <Typography sx={Typoclientes}>Clientes</Typography>

                <Box sx={InputConfig}>
                  <TextField label="Digite o nome do Cliente" variant="standard" fullWidth={true} autoFocus={true} />
                  <Button sx={{
                    border: 1,
                    cursor: 'pointer',
                  }} onClick={SearchButton}> <BsSearch />
                  </Button>

                </Box>


              <Button sx={ButtonAddConfig}><AdicionarCliente /> </Button>

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
