import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

//Import Components
import { Typography } from '@mui/material';
import AdicionarNovoTicketModal from '../Layout/AdicionarNovoTicketModal';
import Breadcrumbs from '../Layout/Breadcrumbs/Suporte';
import Navbar from '../Layout/Navbar';
import Sidebar from '../Layout/Sidebar';
import VerificarNovoTicketModal from '../Layout/VerificarNovoTicketModal';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ContainerConfig = {
  overflow: 'hidden',

  '@media (min-width: 320px) ': {
    ml: '13%',
    width: '80%',
  },
  '@media (min-width: 768px) ': {
    ml: '8.5%',
  },
  '@media (min-width: 1024px) ': {
    ml: '8%',
    height: 500,
  },
  '@media (min-width: 1440px) ': {
    width: '85%',
    ml: 5,
    mt: 1,
  },
  '@media (min-width: 2560px) ': {
    width: '85%',
    ml: '0%',
    mt: 1,
  },
  '@media (min-width: 3840px) ': {
    width: '55%',
    ml: '16.5%',
    mt: 1,
  },

}

//Content Config
const ContentConfig = {

  '@media (min-width: 2560px) ': {
    ml: 15,
    width: '80%',
  },
}

const TypoSuporte = {
  mt: 5,
  fontSize: 35,
  fontWeight: 600,

  '@media (min-width: 320px) ': {
    fontSize: 26,
    mt: 2,

  },

}

const TypoSubtitulo = {
  textAlign: 'justify',
  ml: 10,
  mr: 10,
  mt: 2,

  '@media (min-width: 320px) ': {
    ml: 1,
    mr: 1,
  },
  '@media (min-width: 1024px) ': {
    ml: 10,
    mr: 10,
  },

}

//=================ADICIONAR-NOVO-TICKET-BUTTON=========================
const AdicionarNovoTicketButton = {
  ml: 42,

  '@media (min-width: 320px) ': {
    ml: 38,
    width: '262px',
  },
  '@media (min-width: 360px) ': {
    ml: 37.7,
    width: '297px',
  },
  '@media (min-width: 375px) ': {
    ml: 37.4,
    width: '307px',
  },
  '@media (min-width: 384px) ': {
    width: '314.9px',
  },
  '@media (min-width: 412px) ': {
    ml: 37.4,
    width: '339px',
  },
  '@media (min-width: 425px) ': {
    width: '351px',
  },
  '@media (min-width: 600px) ': {
    ml: 44,
  },
  '@media (min-width: 768px) ': {
    ml: 33.6,
    width: '658px',
  },
  '@media (min-width: 800px) ': {
    width: '697px',
  },
  '@media (min-width: 1024px) ': {
    ml: 45.8,
    width: '320px',
  },
  '@media (min-width: 1280px) ': {
    ml: 44.7,
    width: '400px',
  },
  '@media (min-width: 1440px) ': {
    ml: 44,
    width: '470px',
  },
  '@media (min-width: 1920px) ': {
    ml: 42,
    width: '623px',
  },
  '@media (min-width: 2560px) ': {
    ml: 40,
    width: '832px',
  },
}


const TypoNovoTicket = {
  border: 1,
  ml: 9.7,
  backgroundColor: '#009CD0',
  color: '#fff',
  width: '32.5%',
  p: 1,

  '@media (min-width: 320px) ': {
    ml: 1.3,
    width: '192px',
  },
  '@media (min-width: 360px) ': {
    ml: 1.3,
    width: '222px',
  },
  '@media (min-width: 375px) ': {
    ml: 1.3,
    width: '227px',
  },
  '@media (min-width: 384px) ': {
    ml: 1.3,
    width: '236px',
  },
  '@media (min-width: 412px) ': {
    ml: 1.5,
    width: '255px',
  },
  '@media (min-width: 425px) ': {
    ml: 1.7,
    width: '264px',
  },
  '@media (min-width: 600px) ': {
    ml: 8.3,
  },
  '@media (min-width: 768px) ': {
    ml: 1.7,
    width: '510.5px',
  },
  '@media (min-width: 800px) ': {
    ml: 2.1,
    width: '542px',
  },
  '@media (min-width: 1024px) ': {
    ml: 9.7,
    width: '239px',
  },
  '@media (min-width: 1280px) ': {
    ml: 9.6,
    width: '302px',
  },
  '@media (min-width: 1440px) ': {
    width: '359px',
    ml: 9.8,
  },
  '@media (min-width: 1920px) ': {
    width: '480px',
  },
  '@media (min-width: 2560px) ': {
    width: '650px',
    ml: 10.3,
  }
}

//=================VERIFICAR-TICKET-BUTTON=========================

const VerificarTicketButton = {
  mt: -4.8,
  ml: 24,

  '@media (min-width: 320px) ': {
    ml: -63.6,
    mt: 8,
    width: '260px',
    p: 10,
  },
  '@media (min-width: 360px) ': {
    ml: -63.6,
    mt: 8,
    width: '295px',
    p: 10,
  },
  '@media (min-width: 375px) ': {
    ml: -63.6,
    mt: 8,
    width: '302px',
    p: 10,
  },
  '@media (min-width: 384px) ': {
    ml: -63.6,
    mt: 8,
    width: '312px',
    p: 10,
  },
  '@media (min-width: 412px) ': {
    ml: -63.6,
    mt: 8,
    width: '340px',
    p: 10,
  },
  '@media (min-width: 425px) ': {
    ml: -63.6,
    mt: 8,
    width: '348px',
    p: 10,
  },
  '@media (min-width: 600px) ': {
    ml: -56.5,
  },
  '@media (min-width: 768px) ': {
    ml: -63.6,
    mt: 8,
    width: '660px',
    p: 10,
  },
  '@media (min-width: 800px) ': {
    ml: -62.8,
    mt: 8,
    width: '697px',
    p: 10,
  },
  '@media (min-width: 1024px) ': {
    ml: -15,
    mt: -20.5,
    width: '303px',
  },
  '@media (min-width: 1280px) ': {
    ml: -8,
    mt: -17.75,
    width: '380px',
  },
  '@media (min-width: 1440px) ': {
    ml: 5,
    mt: -14.5,
    width: '482px',
  },
  '@media (min-width: 1920px) ': {
    width: '617px',
    mt: -14.5,
    ml: 24,
  },
  '@media (min-width: 2560px) ': {
    ml: 45,
    mt: -11.8,
    width: '851px'
  },

}

const TypoVerificarNovoTicket = {
  width: '32.1%',
  height: 72,
  ml: 79,
  mt: -8.8,
  backgroundColor: '#4ADE80',
  color: '#fff',
  p: 1,
  textAlign: 'center',

  '@media (min-width: 320px) ': {
    ml: 1.4,
    mt: -18.9,
    width: '191px',
  },
  '@media (min-width: 360px) ': {
    ml: 1.4,
    mt: -18.9,
    width: '220px',
  },
  '@media (min-width: 375px) ': {
    ml: 1.4,
    mt: -18.9,
    width: '226px',
  },
  '@media (min-width: 384px) ': {
    ml: 1.4,
    mt: -18.9,
    width: '232.8px',
  },
  '@media (min-width: 412px) ': {
    ml: 1.4,
    mt: -18.9,
    width: '88%',
  },
  '@media (min-width: 425px) ': {
    ml: 1.4,
    mt: -18.9,
    width: '263px',
  },
  '@media (min-width: 600px) ': {
    ml: 8.5,
  },
  '@media (min-width: 768px) ': {
    ml: 1.4,
    mt: -18.8,
    width: '511px',
  },
  '@media (min-width: 800px) ': {
    ml: 2.2,
    mt: -18.8,
    width: '542px',
  },
  '@media (min-width: 1024px) ': {
    ml: 50,
    mt: -18.8,
    width: '226px',
  },
  '@media (min-width: 1280px) ': {
    ml: 57,
    mt: -18.8,
    width: '288px',
  },
  '@media (min-width: 1440px) ': {
    ml: 70,
    mt: -18.8,
    width: '369px',
  },
  '@media (min-width: 1920px) ': {
    ml: 89,
    width: '477px',
  },
  '@media (min-width: 2560px) ': {
    ml: 110,
    width: '665px',
  }

}


export default function Suporte() {
  return (
    <Box sx={{ backgroundColor: '#F6F4F4', height: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={20}>
          <Navbar />
          <Breadcrumbs />
        </Grid>
        <Grid item xs={1} sx={{ zIndex: 1000, }}>
          <Sidebar />
        </Grid>
        <Grid item xs={11}>
          <Item sx={ContainerConfig}>

            <Typography sx={TypoSuporte}>Bem Vindo ao Centro de Suporte</Typography>
            <Typography sx={TypoSubtitulo}>Para otimizar solicitações de suporte e atendê-lo melhor, utilizamos um sistema de tíquetes de suporte. A cada solicitação é atribuído um número de ticket exclusivo que você pode usar para rastrear o progresso e as respostas online. Para sua referência, forneceremos arquivos completos e histórico de todas as suas solicitações de suporte. É necessário um endereço de email válido para enviar um ticket.</Typography>

            <Box sx={ContentConfig}>
              <Box sx={AdicionarNovoTicketButton}><AdicionarNovoTicketModal /></Box>
              <Typography sx={TypoNovoTicket}>Por gentileza, detalhe o máximo possível para que possamos atende-lo melhor. Para consultar um ticket feito anteriormente, faça o login.
              </Typography>

              <Box sx={VerificarTicketButton}><VerificarNovoTicketModal /></Box>
              <Typography sx={TypoVerificarNovoTicket}>Clique para Verificar os Tickets enviados!
              </Typography>

            </Box>

          </Item>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', color: 'red', fontStyle: 'bold', width: 1, pt: 10, pb: 5 }}>
          VERSÃO DEMONSTRATIVA
      </Box>
    </Box>
  );
}
