import React from 'react';
import { Box, Typography } from '@mui/material';

const BoxConfig = {
  border: 1,
  borderColor: '#dbdbdb',
  borderLeft: 5,
  borderLeftColor: '#FFD23F',
  boxShadow: 2,
  maxHeight: 54,
  mt: 1,

  '@media (min-width: 320px)': {
    maxHeight: 400,
    height: 120,
  },
  '@media (min-width: 375px)': {
    height: '7em',
    maxHeight: 700,
  },
  '@media (min-width: 425px)': {
    height: '7em',
    maxHeight: 700,
  },
  '@media (min-width: 1024px)': {
    width: '99%',
    maxHeight: 60,
  },
  '@media (min-width: 1440px)': {
    width: '99%',
    maxHeight: 60,
  },



}

const BoxNomeEIdade = {
  pl: 2,
  display: 'flex',

  '@media (min-width: 320px)': {
    flexDirection: 'column',
    mt: 1,
    fontSize: 15,
    textAlign: 'center',
    p: 0,
  },
  '@media (min-width: 375px)': {
    flexDirection: 'column',
    ml: '1em',
    mt: 1,
    fontSize: 15,
  },
  '@media (min-width: 2560px)': {
    ml: -30,
    mt: 1,
    fontSize: 15,
  },


}

const BoxDateHour = {
  display: 'flex',

  '@media (min-width: 320px)': {
    flexDirection: 'column',
    mt: 1,
    alignText: 'center',
    ml: -2.5
  },
  '@media (min-width: 1024px)': {
    mt: 0.5,
    ml: -150,
  },
  '@media (min-width: 1440px)': {
    mt: 0.5,
    ml: -142,
  },
  '@media (min-width: 2560px)': {
    ml: -112,
  },

}

const TypoName = {
  fontWeight: 600,

  '@media (min-width: 320px)': {
    fontSize: 12,
  },
  '@media (min-width: 425px)': {
    fontSize: 15,
  },
  '@media (min-width: 1024px)': {
    fontSize: 17,
    ml: -64,
    mt: 0.5,
  },
  '@media (min-width: 1440px)': {
    fontSize: 17,
    ml: -71,
    mt: 0.5,
  },
}

const TypoAge = {
  pl: 2,
  mt: 0.8,

  '@media (min-width: 320px)': {
    flexDirection: 'column',
    ml: '-1.8em',
    mt: 1,
    fontSize: 11.8,
  },
  '@media (min-width: 425px)': {
    fontSize: 14,
    mt: 0.2,
  },
  '@media (min-width: 1024px)': {
    fontSize: 15,
    mt: -3,
    ml: -25,
  },
  '@media (min-width: 1440px)': {
    fontSize: 15,
    mt: -3,
    ml: -25,
  },
  '@media (min-width: 1920px)': {
    ml: -32,
    mt: -3.1,
    fontSize: 15.5,
  },

  
}

const TypoDateHour = {
  pl: 2,

  '@media (min-width: 320px)': {
    ml: '0.8em',
    mt: 1,
    fontSize: 12,
  },
  '@media (min-width: 425px)': {
    fontSize: 17,
    mt: -0.1,
    textAlign: 'center',
  },
  '@media (min-width: 768px)': {
    ml: 0.2,
    mt: 0.4,
    fontSize: 15,
  },
  '@media (min-width: 1024px)': {
    ml: 80,
    mt: -1,
  },
  '@media (min-width: 1440px)': {
    ml: 70,
    mt: -1,
  },
}

const TypoStatus = {
  pl: 1,
  pt: 0.25,
  color: '#FFD23F',
  fontWeight: 600,

  '@media (min-width: 320px)': {
    ml: 1,
  },
  '@media (min-width: 425px)': {
    textAlign: 'center'
  },
  '@media (min-width: 1024px)': {
    textAlign: 'center',
    ml: 190,
    mt: -4.5,
  },
  '@media (min-width: 1440px)': {
    textAlign: 'center',
    ml: 190,
    mt: -4.5,
  },
  '@media (min-width: 2560px)': {
    ml: 150,
  },


  }

const AtendimentoPopoverConfig = {
  ml: -5,
  mt: -0.5,

  '@media (min-width: 320px)': {
    ml: -72,
    mt: -2,
  },
  '@media (min-width: 360px)': {
    ml: -69,
    mt: -2,
  },
  '@media (min-width: 375px)': {
    ml: -68,
  },
  '@media (min-width: 384px)': {
    ml: -127,
    mt: -3,
  },
  '@media (min-width: 390px)': {
    ml: -67,
    mt: -3,
  },
  '@media (min-width: 410px)': {
    ml: -64,
    mt: -2,
  },
  '@media (min-width: 425px)': {
    ml: -64,
    mt: -2,
  },
  '@media (min-width: 768px)': {
    ml: -70,
    mt: -4,
  },
  '@media (min-width: 1024px)': {
    ml: -70,
    mt: 1,
  },
  '@media (min-width: 1280px)': {
    ml: -50,
    mt: 1,
  },
  '@media (min-width: 1440px)': {
    ml: -30,
    mt: 1.3,
  },
  '@media (min-width: 1920px)': {
    ml: -60,
    mt: 1.3,
  },
  '@media (min-width: 2560px)': {
    ml: -30,
    mt: 1.3,
  },
  '@media (min-width: 3840px)': {
    ml: 30,
  },

}


export default function ServiceBar() {
  return (
    <Box sx={BoxConfig}>
    
    <Box sx={BoxNomeEIdade}>
      <Typography variant='h6' sx={TypoName}>Dionária Almeida Luz</Typography>
      <Typography sx={TypoAge}>24 Anos e 6 Meses</Typography>
    </Box>

    <Box sx={BoxDateHour}>
      <Typography sx={TypoDateHour}>22/12/2022 11:00</Typography>
      <Typography sx={TypoStatus}>Faltou</Typography>
    </Box>


    </Box>
  )
}
