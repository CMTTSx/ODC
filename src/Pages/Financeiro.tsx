import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Financeiro'
import Sidebar from '../Layout/Sidebar';

import EntradaSaida from '../assets/entradaSaida.png'
import Boleto from '../../src/assets/Boleto.webp'
import nfe from '../../src/assets/icon-nfe.png';



const TypoFinanceiro = {
  fontSize: 40,
  color: '#000000',
  fontWeight: 600,
  mt: 10,
  ml: 75,

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 8.4,
    mt: 3,
    fontSize: 30,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 10,
    mt: 3,
    fontSize: 30,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    ml: 11,
    mt: 1,
    fontSize: 30,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 13,
    mt: 1,
    fontSize: 30,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 16,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 23,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 39,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 45,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 53,
  },
  '@media (min-width: 2560px) ': {
    ml: 90,
    mt: 8,
  },
  '@media (min-width: 3840px) ': {
    ml: 140,
  },
  
  

}

const ButtonConfig = {
  border: 1,
  width: 250,
  height: 100,
  m: 2,
  cursor: 'pointer',

  '@media (min-width: 320px) and (max-width: 374px)': {
    display: 'flex',
    flexDirection: 'column',
    width: '10em',
    height: '9em',
    ml: -7,
    mt: 0,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    display: 'flex',
    flexDirection: 'column',
    width: '10em',
    height: '9em',
    ml: -4,
    mt: 0,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    display: 'flex',
    flexDirection: 'column',
    width: '10em',
    height: '9em',
    ml: -23,
    mt: 0,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    width: '7em',
    height: '10em',
    ml: 0,
    mt: -140,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    width: '10em',
    height: '10em',
    ml: 12.5,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    width: '14em',
    height: '7em',
    m: -25,
    ml: 38,
    mt: -120,
  }

}



const BoxConfig = {
  mt: 30,
  ml: -65,

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 23,
    mt: -115,
    width: '2em',
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 23,
    mt: -115,
    width: '2em',
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    display: 'flex',
    flexDirection: 'column',
    ml: 4.5,
    mt: 15,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 11,
    display: 'flex',
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 20,
    display: 'flex',
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: -15,
    mt: -40,
  },
}

const EntradaSaidaIMG = {
  width: '20%',
  ml: 5,
  mt: -3,

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: -7,
    mt: -1,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: -7,
    mt: -2,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    width: '10%',
    ml: 0.5,
    mt: -5,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    width: '20%',
    ml: 2.5,
    mt: -5,
  }
}

const TypoEntradaSaida = {
  ml: -11,
  mt: 7,
  
  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 0,
    mt: 3,
    fontSize: 11,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 0,
    mt: 3,
    fontSize: 11,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: -1,
    mt: 10,
    fontSize: 13,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: -5,
    mt: 10,
  },
}

const boletoIMG = {
  ml: 8,
  mt: -3,

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 0,
    mt: -1,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 0,
    mt: -1,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: 1,
    mt: -4,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 3.5,
    mt: -5,
  }
}

const TypoBoleto = {
  ml: -14,
  mt: 7,

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 0.2,
    mt: 3,
    fontSize: 11,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 0.2,
    mt: 2.5,
    fontSize: 11,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: -9,
    mt: 9,
    fontSize: 13,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
  ml: -11.5,
  mt: 9.5,
  },
}

const nfeIMG = {

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 0,
    mt: 0,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 0,
    mt: -1,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: 0.5,
    mt: -3,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 3.5,
    mt: -5,
  }
}

const Typonfe = {

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 0,
    mt: 0.9,
    fontSize: 10,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 0,
    mt: 2,
    fontSize: 9,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: -9.3,
    mt: 9.5,
    fontSize: 12.3,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: -10,
    mt: 10,
  }
}

export default function Financeiro() {
  return (
    <Box>
      <Navbar />
      <Breadcrumbs />
      <Box sx={{ backgroundColor: '#fff' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2} sx={{ zIndex: 1000 }}>
            <Box><Sidebar /></Box>
          </Grid>
          <Typography sx={TypoFinanceiro}>Financeiro</Typography>

          <Box sx={BoxConfig} >
            <Button disabled={true} sx={ButtonConfig} >
              <Box sx={EntradaSaidaIMG}><img src={EntradaSaida} alt="" /></Box>
              <Typography sx={TypoEntradaSaida}>Entradas e Saídas</Typography>
            </Button>
            <Button disabled={true} sx={ButtonConfig} >
              <Box sx={boletoIMG}><img src={Boleto} alt="" style={{ width: '5em', marginLeft: '-0.2em', }} /></Box>
              <Typography sx={TypoBoleto}>Emissão de Boleto</Typography>
            </Button>
            <Button disabled={true} sx={ButtonConfig} >
              <Box sx={nfeIMG}><img src={nfe} alt="" style={{ width: '5em', }} /></Box>
              <Typography sx={Typonfe}>Nota Fiscal Eletrônica</Typography>
            </Button>
          </Box>
        </Grid></Box>
    </Box>
  );
}