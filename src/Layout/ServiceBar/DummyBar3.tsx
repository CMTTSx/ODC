import React from 'react';
import { Box, Typography } from '@mui/material';

const BoxConfig = {
  border: 1,
  borderColor: '#dbdbdb',
  borderLeft: 5,
  borderLeftColor: '#FF9000',
  boxShadow: 2,
  mb: 1,
  backgroundColor: '#fff',

  '@media (min-width: 320px)': {
    maxHeight: 400,
    height: 120,
    ml: '-8%',
    width: '14rem',
  },
  '@media (min-width: 375px)': {
    height: '7em',
    width: '17.3rem',
    ml: '-0.8rem',
  },
  '@media (min-width: 425px)': {
    height: '7em',
    ml: '-4%',
    width: '20.3rem',
  },
  '@media (min-width: 768px)': {
    ml: '-5%',
    height: '3.5em',
    width: '33em',
  },
  '@media (min-width: 1024px)': {
    width: '40rem',
    ml: '-4%',
    height: '3.5em',
  },
  '@media (min-width: 1440px)': {
    width: 940,
    maxHeight: 60,
    ml: '-2%',
  },
  '@media (min-width: 2560px)': {
    width: 1630,
    maxHeight: 60,
  },

}

const BoxNomeEIdade = {

  '@media (min-width: 320px)': {
    mt: 1,
    textAlign: 'center',
  },
  '@media (min-width: 768px)': {
    mt: 1,
    ml: -45,
  },
  '@media (min-width: 1024px)': {
    mt: 1,
    ml: 8,
  },
  '@media (min-width: 1440px)': {
    ml: 0,
    pr: 15,
  },
  '@media (min-width: 2560px)': {
    mt: 1,
    ml: -82,
  },

}

const BoxDateHour = {
  display: 'flex',

  '@media (min-width: 320px)': {
    flexDirection: 'column',
    mt: 1,
    ml: '1.6rem',
  },
  '@media (min-width: 425px)': {
    flexDirection: 'column',
    mt: 1,
    ml: '-2rem',
  },
  '@media (min-width: 768px)': {
    flexDirection: 'column',
    mt: -4.8,
    ml: '-2rem',
  },
  '@media (min-width: 1024px)': {
    mt: 0.7,
    ml: -137,
  },
  '@media (min-width: 1440px)': {
    mt: 0,
    ml: 0,
  },
  '@media (min-width: 2560px)': {
    ml: -260,
  },

}

const TypoName = {
  fontWeight: 600,

  '@media (min-width: 320px)': {
    fontSize: 13,
    textAlign: 'center',
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
  '@media (min-width: 2560px)': {
    ml: -71,
    mt: 1.5,
  },
}

const TypoAge = {

  '@media (min-width: 320px)': {
    flexDirection: 'column',
    ml: '-1em',
    mt: 1,
    fontSize: 11.8,
  },
  '@media (min-width: 425px)': {
    fontSize: 14,
    mt: 0.2,
  },
  '@media (min-width: 768px)': {
    fontSize: 14,
    mt: 0.2,
    ml: -0.5,
  },
  '@media (min-width: 1024px)': {
    fontSize: 15,
    mt: -3,
    ml: -25,
  },
  '@media (min-width: 1440px)': {
    fontSize: 15,
    mt: -2,
    ml: 5,
  },
  '@media (min-width: 1920px)': {
    ml: -32,
    mt: -3.1,
    fontSize: 15.5,
  },
  '@media (min-width: 2560px)': {
    ml: 22,
    mt: -2,
  },

}

const TypoDateHour = {

  '@media (min-width: 320px)': {
    ml: '1.5em',
    mt: 1,
    fontSize: 12,
  },
  '@media (min-width: 375px)': {
    ml: '5em',
    mt: 1,
    fontSize: 12,
  },
  '@media (min-width: 425px)': {
    fontSize: 17,
    mt: -0.1,
    ml: '1.8em',
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
    ml: -87.5,
    mt: -1,
  },
  '@media (min-width: 2560px)': {
    ml: '40%',
    mt: -3,
  },
}

const TypoStatus = {
  pl: 1,
  pt: 0.25,
  color: '#FF9000',
  fontWeight: 600,

  '@media (min-width: 320px)': {
    ml: 2,
  },
  '@media (min-width: 375px)': {
    ml: 5,
  },
  '@media (min-width: 425px)': {
    ml: 15,
  },
  '@media (min-width: 768px)': {
    ml: 45,
    mt: -3,
  },
  '@media (min-width: 1440px)': {
    ml: 74.4,
    mt: -5,
  },
  '@media (min-width: 2560px)': {
    ml: 417.5,
    mt: -3,
  },
}




export default function ServiceBar() {
  return (
    <Box sx={BoxConfig}>

      <Box sx={BoxNomeEIdade}>
        <Typography variant='h6' sx={TypoName}>Fabiane Santos Cruz</Typography>
        <Typography sx={TypoAge}>33 Anos e 4 Meses</Typography>
      </Box>

      <Box sx={BoxDateHour}>
        <Typography sx={TypoDateHour}>22/12/2022 11:00</Typography>
        <Typography sx={TypoStatus}>Faltou</Typography>
      </Box>


    </Box>
  )
}
