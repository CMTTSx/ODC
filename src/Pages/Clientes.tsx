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

const ContentConfig = {

  '@media (min-width: 320px) ': {
    ml: 5,
    width: '80%',
    overflow: 'hidden',
  },
  '@media (min-width: 1024px) ': {
    ml: 19,
  },
  '@media (min-width: 1440px) ': {
    width: '60rem',
    ml: 18,
    mt: 10,
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
    <Box sx={{ backgroundColor: '#F6F4F4', height: '50rem', }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={20}>
          <Navbar />
          <Breadcrumbs />
        </Grid>
        <Grid item xs={1} sx={{ zIndex: 1000, }}>
          <Sidebar />
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
        <Box sx={{ textAlign: 'center', color: 'red', fontStyle: 'bold', width: '100%', ml: 1}}>
          VERSÃO DEMONSTRATIVA
      </Box>
      </Grid>
    </Box>
  );
}
