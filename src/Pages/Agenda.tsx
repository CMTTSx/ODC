import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';


import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Agenda'
import Sidebar from '../Layout/Sidebar';
import AgendarHorario from '../Layout/AgendarAtendimentoModal'
import AgendamentoPopover from '../Layout/AgendamentoPopover'

const GridConfig = {
  zIndex: 1,
  mt: 25,
}

const BoxConfig = {
  mt: 10,
  ml: 25,
  border: 1,
  backgroundColor: '#fff',
  borderColor: '#cfcfcf',
  width: '60em',
  height: '63px',
  zIndex: 2,

  '@media (min-width: 320px) and (max-width: 374px)': {
    width: 220,
    ml: 5.4,
    mt: 1,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: 13.5,
    mt: 1,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    width: 270,
    ml: 12.5,
    mt: 1,
  },

  '@media (min-width: 390px) and (max-width: 424px)': {
    ml: 4,
    mt: 1,
    width: '18em',
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 3,
    mt: 1,
    width: '20.5em',
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 10,
    mt: 1,
    width: '20.5em',
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    width: '35em',
    ml: 2,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 10,
    width: '40em',
    mb: 1.5,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 20,
    width: '40em',
    mb: 1.5,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 25,
    width: '40em',
    mb: 1.5,
  },
  '@media (min-width: 2560px)': {
    ml: 40,
    mb: 2,
  },
  '@media (min-width: 3840px)': {
    ml: 110,
    mb: 5,
    mt: 10,
  },
}

const TypoAgendamento = {
  zIndex: 1,
  mt: -40,
  ml: 67,
  fontSize: 35,
  fontWeight: 600,
  color: '#000000',

  '@media (min-width: 320px) and (max-width: 374px)': {
    fontSize: 20,
    mt: -45,
    ml: 10,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    fontSize: 24,
    mt: -175,
    ml: 17.4,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    fontSize: 24,
    mt: -172,
    ml: 19,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    ml: 11.5,
    mt: -45,
    fontSize: 25,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 13,
    mt: -45,
    fontSize: 23,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 20,
    mt: -43,
    fontSize: 23,
  },
  '@media (min-width: 768px) and (max-width: 1022px)': {
    ml: 21.5,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 34,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 44,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 50,
  },
  '@media (min-width: 2560px)': {
    ml: 80,
    fontSize: 50,
  },
  '@media (min-width: 3840px)': {
    ml: 140,
    mt: -32,
  },
}

const TypoName = {
  ml: 20,
  mt: -2,
  mb: 1.6,
  fontSize: 20,
  fontWeight: 600,
  color: '#000000',
  '@media (min-width: 320px) and (max-width: 375px)': {
    mt: -1.5,
    ml: 9.8,
    fontSize: 12,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    mt: -1.5,
    ml: 11,
    fontSize: 14,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    mt: -1.5,
    ml: 12.5,
    fontSize: 15,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    fontSize: 15,
    ml: 14,
    mt: -2,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    fontSize: 18,
    ml: 14,
    mt: -2.5,
  },


}

const TypoAgendado = {
  zIndex: 1,
  ml: 2,
  mt: 4,
  fontWeight: 600,
  color: '#0053d9',

  '@media (min-width: 320px) and (max-width: 374px)': {
    mt: 4,
    ml: 1,
    fontSize: 12,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    mt: 4,
    ml: 1,
    fontSize: 12,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    mt: 4,
    ml: 1,
    fontSize: 12,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    mt: 4,
    fontSize: 15,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    fontSize: 15,
    mt: 5,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    fontSize: 15,
    mt: 5,
  },

}

const TypoHour = {
  zIndex: 1,
  ml: 2,
  mt: -6,
  fontSize: 20,
  fontWeight: 600,
  '@media (min-width: 320px) and (max-width: 375px)': {
    mt: -4.5,
    ml: 1.2,
    fontSize: 13,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    mt: -4.7,
    ml: 1,
    fontSize: 15,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    mt: -5.5,
    ml: 2.2,
    fontSize: 15,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    fontSize: 15,
    ml: 2,
    mt: -5.4,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    fontSize: 15,
    ml: 2.5,
    mt: -5.4,
  },
}

const ButtonConfig = {
  mt: 2,
  ml: 70,

  '@media (min-width: 320px) and (max-width: 359px)': {
    ml: 7,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: 15,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 18,
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 10,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 10,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 11,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 18,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 23,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 36,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 47,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: 52,
  },
  '@media (min-width: 2560px)': {
    ml: 83,
  },
  '@media (min-width: 3840px)': {
    ml: 150,
  },
}

const PopoverConfig = {
  ml: -35,

  
  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: -20,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: -16,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    ml: -119,
    mt: 0.5,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: -16,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: -25,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: -34,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: -75,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: -75,
  },
}


export default function Agenda() {
  return (
    <Box>
      <Navbar />
      <Breadcrumbs />
      <Box sx={{ backgroundColor: '#fff' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}  sx={{zIndex: 1000}}>
            <Box><Sidebar /></Box>
          </Grid>
          <Box sx={GridConfig}>
        <Box sx={{ backgroundColor: '#fff' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ zIndex: 1000 }}>
            <Grid sx={GridConfig}>

              <Typography
                sx={TypoAgendamento}
              >Agendamento</Typography>

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

            </Grid>
          </Grid>
        </Box>
      </Box>
        </Grid></Box>
    </Box>
  );
}