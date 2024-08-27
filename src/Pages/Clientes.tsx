import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { BsSearch } from 'react-icons/bs';
import AdicionarCliente from '../Layout/AdicionarClienteModal';
import Breadcrumbs from '../Layout/Breadcrumbs/Clientes';
import Navbar from '../Layout/Navbar';
import Sidebar from '../Layout/Sidebar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ContentConfig = {

  '@media (min-width: 320px) ': {
    ml: '14.5%',
    width: '80%',
    overflow: 'hidden',
  },
  '@media (min-width: 375px) ': {
    ml: '13%',
  },
  '@media (min-width: 768px) ': {
    ml: '7%',
  },
  '@media (min-width: 1024px) ': {
    ml: '7%',
  },
  '@media (min-width: 1440px) ': {
    width: '60rem',
    ml: '8%',
    mt: 10,
  },
  '@media (min-width: 2560px) ': {
    width: '40%',
    ml: '24.5%',
    mr: 'auto',
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
    <Box sx={{ backgroundColor: '#F6F4F4', height: '50rem', width: 1, }}>
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
      </Grid>
      <Box sx={{ textAlign: 'center', color: 'red', fontStyle: 'bold', width: 1, pt: 10, }}>
          VERSÃO DEMONSTRATIVA
      </Box>
    </Box>
  );
}
