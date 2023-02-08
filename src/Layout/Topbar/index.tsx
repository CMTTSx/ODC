import React from 'react'
import { Box, Typography } from '@mui/material'


const BoxConfig = {
  boxShadow: 5,
  width: '30em',
  display: 'flex',
  ml: 55,
  mr: 'auto',
  mt: 10,

  '@media (min-width: 320px) and (max-width: 359px)': {
    mt: -126,
    mb: -20,
    ml: 11  ,
    width: '14em',

  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    mt: -126,
    mb: -20,
    ml: 13,
    width: '14em',

  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    mt: -123,
    mb: -20,
    ml: 13.5  ,
    width: '15em',

  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    mt: -120,
    ml: 14.5,
    width: '15em',

  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    mt: -120,
    mb: -10,
    ml: 16,
    width: '15em',

  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 1,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    mt: 10,
    mb: -10,
    ml: 10,
    width: '25em',
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    mt: 10,
    mb: -3,
    ml: 23,
    width: '25em',
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: 30,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    mt: 10,
    mb: -3,
    ml: 40,
    width: '25em',
  },
  '@media (min-width: 2560px)': {
    mt: 30,
    width: '50em',
  },
  '@media (min-width: 3840px)': {
    mt: 30,
    ml: '60%',
    width: '70em',
  },

}

const Box1 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  ml: 'auto',
  mr: 'auto',
}

const Box2 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  ml: 'auto',
  mr: 'auto',
}

const Box3 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  ml: 'auto',
  mr: 'auto',

 
}


export default function TopBar() {
  return (
    <Box sx={BoxConfig}>

        <Box sx={Box1}>
          <Typography sx={{ color: '#97ffae', fontSize: 26, fontWeight: 600, }} variant='h5'> 0 </Typography>
          <Typography sx={{ fontWeight: 600, color: '#000000' }}>Atendido</Typography>
        </Box>

        <Box sx={Box2}>
          <Typography sx={{ display: 'inline', color: '#fcf403', fontSize: 26, fontWeight: 600, }}variant='h5'> 1 </Typography>
          <Typography sx={{ display: 'inline', fontWeight: 600, color: '#000000' }}>Cancelado</Typography>
        </Box>

        <Box sx={Box3}>
          <Typography sx={{ display: 'inline', color: '#fc1703', fontSize: 26, fontWeight: 600, }}variant='h5'> 2 </Typography>
          <Typography sx={{ display: 'inline', fontWeight: 600, color: '#000000' }}>Falta</Typography>
        </Box>

      </Box>
  )
}
