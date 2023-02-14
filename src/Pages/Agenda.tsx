import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Agenda'
import Sidebar from '../Layout/Sidebar';
import AgendarHorario from '../Layout/AgendarAtendimentoModal'
import AgendamentoPopover from '../Layout/AgendamentoPopover'


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

const BoxConfig = {
  mt: 3,
  mb: 1,
  ml: 'auto',
  mr: 'auto',
  border: 1,
  backgroundColor: '#fff',
  borderColor: '#cfcfcf',
  width: '60em',
  height: '63px',
  zIndex: 2,

  '@media (min-width: 320px) ': {
    width: '100%',
    height: '40px',
  },
  '@media (min-width: 768px) ': {
    width: '90%',
    height: '40px',
  },
  '@media (min-width: 1440px) ': {
    width: '50em',
    height: '40px',
  },
  '@media (min-width: 1920px) ': {
    width: '50em',
    height: '45px',
  },

}

const TypoAgendamento = {
  zIndex: 1,
  mt: 2,
  ml: 'auto',
  mr: 'auto',
  fontSize: 35,
  fontWeight: 600,
  color: '#000000',

  '@media (min-width: 320px) ': {
    fontSize: 18,
  },
  '@media (min-width: 1024px) ': {
    fontSize: 30,
  },
}

const TypoName = {
  ml: -40,
  mt: -5,
  mb: 1.6,
  fontSize: 22,
  fontWeight: 600,
  color: '#000000',

  '@media (min-width: 320px) ': {
    ml: 3,
    mt: -1.7,
    fontSize: 13,
  },
  '@media (min-width: 768px) ': {
    ml: -45,
    mt: -2.45,
    fontSize: 13,
  },
  '@media (min-width: 1024px) ': {
    ml: -45,
    mt: -1.7,
    fontSize: 14,
  },
  '@media (min-width: 1280px) ': {
    ml: -60,
    mt: -1.7,
    fontSize: 14,
  },
  '@media (min-width: 1440px) ': {
    ml: -45,
    mt: -1.8,
    fontSize: 18,
  },
  '@media (min-width: 1920px) ': {
    ml: -40,
    mt: -2.1,
    fontSize: 19,
  },


}

const TypoAgendado = {
  zIndex: 1,
  ml: -90,
  mt: 2,
  fontWeight: 600,
  color: '#0053d9',

  '@media (min-width: 320px) ': {
    ml: -21,
    mt: 2.9,
    fontSize: 12,
  },
  '@media (min-width: 375px) ': {
    ml: -25,
    fontSize: 12,
  },
  '@media (min-width: 768px) ': {
    ml: 10,
    mt: 1.8,
    fontSize: 12,
  },
  '@media (min-width: 1024px) ': {
    ml: -75,
    mt: 2.5,
    fontSize: 12,
  },
  '@media (min-width: 1280px) ': {
    ml: -94.5,
    mt: 2.5,
    fontSize: 12,
  },
  '@media (min-width: 1440px) ': {
    ml: -75,
    fontSize: 12,
  },
  '@media (min-width: 1920px) ': {
    ml: -76,
    mt: 3,
    fontSize: 13,
  },
}

const TypoHour = {
  zIndex: 1,
  ml: -90.5,
  mt: -0.6,
  fontSize: 16,
  fontWeight: 600,

  '@media (min-width: 320px) ': {
  ml: -21,
  mt: -4,
  fontSize: 12,
  },
  '@media (min-width: 375px) ': {
    ml: -25.5,
  },
  '@media (min-width: 768px) ': {
    ml: -18,
    mt: -2.2,
  },
  '@media (min-width: 1024px) ': {
    ml: -75,
    mt: -3.8,
  },
  '@media (min-width: 1280px) ': {
    ml: -95,
    mt: -3.8,
  },
  '@media (min-width: 1440px) ': {
    ml: -75,
    mt: -3.8,
  },
  '@media (min-width: 1920px) ': {
    ml: -76,
    mt: -4.3,
    fontSize: 14,
  },

}

const PopoverConfig = {
  ml: 95,
  mt: -5.5,

  '@media (min-width: 320px) ': {
  ml: 23,
  mt: -5,
  },
  '@media (min-width: 375px) ': {
    ml: 28,
  },
  '@media (min-width: 425px) ': {
    ml: 32,
    mt: -5.2,
  },
  '@media (min-width: 768px) ': {
    ml: 54,
    mt: -5,
  },
  '@media(min-width: 1024px) ': {
    ml: 75,
    mt: -5.1,
  },
  '@media(min-width: 1280px) ': {
    ml: 90,
  },
  '@media (min-width: 1440px) ': {
    ml: 75,
    mt: -6,
  },
  '@media (min-width: 1920px) ': {
  ml: 80,
  },
}

const ButtonConfig = {
  mt: 5,
  ml: 0,
}

export default function Agenda() {
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

          <Typography sx={TypoAgendamento}>
            Agendamento
          </Typography>

          <Box
                sx={BoxConfig}>

                <Typography
                  sx={TypoAgendado}
                >Agendado </Typography>

                <Typography
                  sx={TypoHour}
                >11:00Hrs</Typography>

                <Typography
                  sx={TypoName}
                >Julia Silva Machado </Typography>

                <Box sx={PopoverConfig}><AgendamentoPopover /></Box>

          </Box>
              <Button sx={ButtonConfig}>
                <AgendarHorario />
              </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
