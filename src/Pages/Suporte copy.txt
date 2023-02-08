import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Suporte';
import Sidebar from '../Layout/Sidebar';
import AdicionarNovoTicketModal from '../Layout/AdicionarNovoTicketModal';
import VerificarNovoTicketModal from '../Layout/VerificarNovoTicketModal';


const TypoSuporte = {
  mt: 5,
  mb: 0,
  ml: 40,
  fontSize: 35,
  fontWeight: 600,

  '@media (min-width: 320px) and (max-width: 359px)': {
    ml: 4.5,
    mt: 2,
    fontSize: 13.9,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: 4.5,
    mt: 2,
    fontSize: 15,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 4.5,
    mt: 2,
    fontSize: 16,
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 4.5,
    mt: 2,
    fontSize: 16,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 4,
    mt: 2,
    fontSize: 18,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 6,
    mt: 2,
    fontSize: 16,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 8,
    mt: 2,
    fontSize: 20,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 14,
    mt: 3,
    fontSize: 20,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 14,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 22,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 29
  },
  '@media (min-width: 2560px)': {
    ml: 70,
    fontSize: 40,
  },
  '@media (min-width: 3840px)': {
    ml: 100,
    fontSize: 50,
  },

}

const TypoSubtitulo = {
  ml: 30,
  mr: 20,
  mt: -110,
  textAlign: 'justify',

  '@media (min-width: 320px) and (max-width: 359px)': {
    ml: 11,
    mr: 1,
    mt: -122,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: 11,
    mr: 1,
    mt: -122,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 12,
    mr: 1,
    mt: -122,
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 11,
    mr: 1,
    mt: -122,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 11,
    mr: 1,
    mt: -122,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 12,
    mr: 1,
    mt: -122,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 13,
    mr: 1,
    mt: -122,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 14,
    mr: 2,
    mt: -122,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 25,
    mr: 8,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    mt: -118,
    mr: 10,
  },
  '@media (min-width: 2560px)': {
    ml: 60,
    mr: 50,
    fontSize: 20,
  },
  '@media (min-width: 3840px)': {
    ml: 50,
    mr: 50,
    fontSize: 30,
  },

}

//=================ADICIONAR-NOVO-TICKET-BUTTON=========================
const AdicionarNovoTicketButton = {
  mt: -100,
  ml: 115,
  width: '41.1%',

  '@media (min-width: 320px) and (max-width: 359px)': {
    ml: 91,
    mr: -86.8,
    mt: -75,
    width: '100%',
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: 91.7,
    mr: -88,
    mt: -85,
    width: '90%',
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 92,
    mr: -87,
    mt: -85,
    width: '100%',
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 92,
    mr: -87,
    mt: -89,
    width: '100%',
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 92,
    mr: -87,
    mt: -89,
    width: '100%',
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 93,
    mr: -87,
    mt: -90,
    width: '90%',
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 98,
    mr: -87,
    mt: -90,
    width: '75%',
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 93,
    mr: -87,
    mt: -105,
    width: '50%',
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 105,
    mr: -50,
    width: '41.1%',
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 110,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 110,
    mr: -50,
    width: '41.1%',
  },
  '@media (min-width: 2560px)': {
    ml: 140,
    mt: -95,
    width: '32.1%',
  },
  '@media (min-width: 3840px)': {
    ml: 150,
    mt: -75,
    width: '30%',
  },
  
}


const TypoNovoTicket = {
  border: 1,
  ml: 35,
  mt: -88,
  mb: 100,
  backgroundColor: '#009CD0',
  color: '#fff',
  width: '32%',
  p: 1,

  '@media (min-width: 320px) and (max-width: 359px)': {
    mt: -63,
    ml: 11,
    width: '66%',
    alignText: 'justify',
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    mt: -73,
    ml: 11.5,
    width: '68%',
    alignText: 'justify',
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    mt: -73,
    ml: 12,
    width: '66.5%',
    alignText: 'justify',
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    mt: -77,
    ml: 12,
    width: '67%',
    alignText: 'justify',
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    mt: -76.9,
    ml: 12,
    width: '68%',
    alignText: 'justify',
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    mt: -78,
    ml: 13,
    width: '66.7%',
    alignText: 'justify',
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    mt: -78,
    ml: 18,
    width: '57%',
    alignText: 'justify',
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    mt: -92.8,
    ml: 13,
    width: '37.9%',
    alignText: 'justify',
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 25,
    width: '31.2%',
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 30,
    width: '24%',
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 30,
    width: '31.7%',
  },
  '@media (min-width: 2560px)': {
    ml: -183,
    mt: -83,
    width: '25%',
  },
  '@media (min-width: 3840px)': {
    ml: -224.2,
    mt: -62.8,
    width: '23.5%',
  },



}

//=================VERIFICAR-TICKET-BUTTON=========================

const VerificarTicketButton = {
  mt: -101.8,
  ml: 64,
  width: '41.1%',

  '@media (min-width: 320px) and (max-width: 359px)': {
    ml: -83,
    mr: 30,
    mt: -25,
    width: '89.4%',
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: -87,
    mr: 30,
    mt: -37,
    width: '89.4%',
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: -87.7,
    mt: -35,
    width: '89.4%',
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: -89,
    mt: -35,
    width: '89.4%',
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: -91.6,
    mt: -45,
    width: '89.7%',
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: -92,
    mt: -45,
    width: '88.5%',
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: -100,
    mt: -45,
    width: '74.9%',
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: -52,
    mt: -86.6,
    width: '50.3%',
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 20,
    mt: -107.6,
    width: '41.1%',
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: -30,
    mt: -81.5,
    width: '31.7%',
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 38,
    mt: -104.7,
  },
  '@media (min-width: 2560px)': {
    ml: -40,
    mt: -76.5,
    width: '32.1%',
  },
  '@media (min-width: 3840px)': {
    ml: 10,
    mt: -56.5,
    width: '30%',
  },
}

const TypoVerificarNovoTicket = {
  border: 1,
  width: '32%',
  height: 46,
  ml: 118.9,
  mt: -108.2,
  backgroundColor: '#4ADE80',
  color: '#fff',
  p: 1,
  textAlign: 'center',

  '@media (min-width: 320px) and (max-width: 359px)': {
    ml: 11,
    mt: -88.6,
    width: '68%',
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: 11.6,
    mt: -87.6,
    width: '67%',
  },
  '@media (min-width: 375px) and (max-width: 383px)': {
    ml: 13.8,
    mt: -41.3,
    width: '67%',
  },
  '@media (min-width: 383px) and (max-width: 410px)': {
    ml: 13,
    mt: -41.3,
    width: '66.9%',
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 12.4,
    mt: -41.3,
    width: '66.9%',
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 9.85,
    mt: -51.3,
    width: '67%',
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 13.1,
    mt: -87.6,
    width: '66.5%',
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 18,
    mt: -87.6,
    width: '57%',
  },
  '@media (min-width: 768px) and (max-width: 799px)': {
    ml: 54.4,
    mt: -114.3,
    width: '38.2%',
  },
  '@media (min-width: 800px) and (max-width: 819px)': {
    ml: 56.1,
    mt: -114.3,
    width: '38%',
  },
  '@media (min-width: 820px) and (max-width: 833px)': {
    ml: 57.1,
    mt: -114.3,
    width: '38.2%',
  },
  '@media (min-width: 834px) and (max-width: 1022px)': {
    ml: 57.75,
    mt: -114.3,
    width: '38.3%',
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 75,
    mt: -114,
    width: '31.2%',
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 95.9,
    mt: -114,
    width: '24%',
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 93,
    mt: -111.1,
    width: '31.7%',
  },
  '@media (min-width: 2560px)': {
    ml: 157.5,
    mt: -108.1,
    width: '25%',
  },
  '@media (min-width: 3840px)': {
    ml: -89.2,
    mt: -62.4,
    width: '23.55%',
  },

}


export default function Suporte() {
  return (
    <Box>
      <Navbar />
      <Breadcrumbs />
      <Box sx={{ backgroundColor: '#fff' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2} sx={{ zIndex: 1000 }}>
            <Box><Sidebar /></Box>
          </Grid>


          <Typography sx={TypoSuporte}>Bem Vindo ao Centro de Suporte</Typography>

          <Typography sx={TypoSubtitulo}>Para otimizar solicitações de suporte e atendê-lo melhor, utilizamos um sistema de tíquetes de suporte. A cada solicitação é atribuído um número de ticket exclusivo que você pode usar para rastrear o progresso e as respostas online. Para sua referência, forneceremos arquivos completos e histórico de todas as suas solicitações de suporte. É necessário um endereço de email válido para enviar um ticket.</Typography>

          <Box sx={AdicionarNovoTicketButton}><AdicionarNovoTicketModal /></Box>
          <Typography sx={TypoNovoTicket}>Por gentileza, detalhe o máximo possível para que possamos atende-lo melhor. Para consultar um ticket feito anteriormente, faça o login.
          </Typography>

          <Box sx={VerificarTicketButton}><VerificarNovoTicketModal /></Box>
          <Typography sx={TypoVerificarNovoTicket}> Clique para Verificar os Tickets enviados!
          </Typography>

        </Grid>
      </Box>
    </Box>
  );
}