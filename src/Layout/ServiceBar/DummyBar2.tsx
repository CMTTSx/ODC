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
    height: '8em',
    ml: '0%',
    width: '100%',
  },
  '@media (min-width: 768px)': {
    height: '4em',
  },

}

const TypoName = {
  fontWeight: 600,

  '@media (min-width: 320px)': {
    fontSize: 13,
    textAlign: 'center',
    ml: 'auto',
    mr: 'auto',
    mt: 1
  },
  '@media (min-width: 425px)': {
    fontSize: 15,
  },
  '@media (min-width: 768px)': {
    fontSize: 15,
    ml: '-68%',
  },
  '@media (min-width: 1024px)': {
    fontSize: 14,
    ml: '-75%',
    mt: 1.5,
  },
  '@media (min-width: 1440px)': {
    fontSize: 15,
    ml: '-80%',
    mt: 1.5,
  },
  '@media (min-width: 2560px)': {
    ml: '-85%',
    mt: 1.5,
  },
}

const TypoAge = {

  '@media (min-width: 320px)': {
    mt: 1,
    fontSize: 11.8,
    textAlign: 'center',
  },
  '@media (min-width: 425px)': {
    fontSize: 14,
    mt: 0.2,
  },
  '@media (min-width: 768px)': {
    fontSize: 14,
    mt: 0.2,
    ml: '-68%',
  },
  '@media (min-width: 1024px)': {
    fontSize: 13,
    mt: 0,
    ml: '-75.8%',
  },
  '@media (min-width: 1440px)': {
    fontSize: 15,
    mt: -0.5,
    ml: '-80%',
  },
  '@media (min-width: 2560px)': {
    ml: '-85%',
    mt: 0,
  },
}

const TypoDateHour = {

  '@media (min-width: 320px)': {
    mt: 1,
    fontSize: 12,
    textAlign: 'center',
    mx: 'auto'
  },
  '@media (min-width: 375px)': {
    mt: 1,
    fontSize: 12,
  },
  '@media (min-width: 425px)': {
    fontSize: 14,
    mt: -0.1,
    textAlign: 'center',
  },
  '@media (min-width: 768px)': {
    mt: -4,
    ml: '-4%',
    fontSize: 15,
  },
  '@media (min-width: 1024px)': {
    ml: '0rem',
    mt: -4,
    fontSize: 14,
  },
  '@media (min-width: 1440px)': {
    ml: -8,
  },
  '@media (min-width: 2560px)': {
    ml: '19.3%',
    mt: -4,
  },
}

const TypoStatus = {
  pl: 1,
  pt: 0.25,
  color: '#FF9000',
  fontWeight: 600,

  '@media (min-width: 320px)': {
    textAlign: 'center',
  },
  '@media (min-width: 375px)': {
    mx: 'auto'
  },
  '@media (min-width: 768px)': {
    ml: '52%',
    mt: -3,
  },
  '@media (min-width: 1024px)': {
    ml: '53%',
    mt: -3,
    fontSize: 14,
  },
  '@media (min-width: 1440px)': {
    ml: '39.5%',
  },
  '@media (min-width: 2560px)': {
    ml: '61.5%',
    mt: -3,
  },
}





export default function ServiceBar() {
  return (
    <Box sx={BoxConfig}>

        <Typography variant='h6' sx={TypoName}>Dionária Almeida Luz</Typography>
        <Typography sx={TypoAge}>24 Anos e 6 Meses</Typography>
        <Typography sx={TypoDateHour}>22/12/2022 11:00</Typography>
        <Typography sx={TypoStatus}>Faltou</Typography>


    </Box>
  )
}
