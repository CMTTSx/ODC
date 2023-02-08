import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import { BsSearch } from 'react-icons/bs'

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Clientes';
import Sidebar from '../Layout/Sidebar';
import AdicionarCliente from '../Layout/AdicionarClienteModal';



function SearchButton() {
  alert("Botão de Pesquisar Cadastros!");
}


const Typoclientes = {
  fontSize: 40,
  fontWeight: 600,
  color: '#000000',
  mt: 4,
  ml: 60,

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 10,
    mt: 5,
    fontSize: 30,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 12,
    mt: 5,
    fontSize: 30,
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 12,
    mt: 5,
    fontSize: 30,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 13,
    mt: 5,
    fontSize: 30,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 12,
    mt: 5,
    fontSize: 30,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 24,
    mt: 5, 
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 35,
    mt: 5,
  },
  '@media (min-width: 1280px) and (max-width: 1438px)': {
    ml: 50,
    mt: 5,
  },
  '@media (min-width: 1439px) and (max-width: 1440px)': {
    ml: 50,
    mt: 5,
  },
  '@media (min-width: 2560px)': {
    ml: 80,
    fontSize: 50,
    mt: 10,
  },

}

const InputConfig = {
   display: 'flex',
   alignItems: 'flex-end',
   width: '50em',
   ml: -55,
   mt: 30,


   '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 11,
    mt: -120,
    width: '14.3em',
   },
   '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 11,
    mt: -120,
    width: '17.8em',
   },
   '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 11,
    mt: -110,
    width: '18em',
   },
   '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 11,
    mt: -110,
    width: '20em',
  },
   '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 11,
    mt: -110,
    width: '20em',
   },
   '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 13,
    mt: -110,
    width: '85%',
   },
   '@media (min-width: 1439px) and (max-width: 1440px)': {
    ml: -55,
    mt: 30,
    width: '45em',
   },
   '@media (min-width: 2560px)': {
    ml: -50,
    mt: 30,
    width: '45em',
   },

}

const ButtonAddConfig = {
  ml: 29,
  mt: 2,


  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 23,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 30,
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 31,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 34,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 35,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 79,
  },
  '@media (min-width: 1439px) and (max-width: 1440px)': {
    ml: 19,
  },
  '@media (min-width: 2560px)': {
    ml: 24,
  },
}


export default function Clientes() {
  return (
    <Box>
      <Navbar />
      <Breadcrumbs />
      <Box sx={{ backgroundColor: '#fff' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}  sx={{zIndex: 1000}}>
            <Box><Sidebar /></Box>
          </Grid>
           

              <Typography sx={Typoclientes}>Clientes</Typography>


              <Box sx={{ display: 'inline' }}>

                <Box sx={{
                  mt: 10,                  
                }}>

                <Box sx={InputConfig}>
                  <TextField label="Digite o nome do Cliente" variant="standard" fullWidth={true} autoFocus={true} />
                 <Button sx={{
                  border: 1,
                  cursor: 'pointer',
                 }} onClick={SearchButton}> <BsSearch />
                 </Button>

                </Box>
                    
                </Box>

                <Button sx={ButtonAddConfig}><AdicionarCliente /> </Button>

                


              </Box>
          </Grid>
        </Box>
    </Box>
  );
}