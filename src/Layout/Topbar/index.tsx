import React from 'react'
import { Box, Typography } from '@mui/material'


const BoxConfig = {
  boxShadow: 5,
  width: '30%',
  display: 'flex',
  ml: 53,
  mr: 'auto',
  mt: 10,

  '@media (min-width: 320px) ': {
    ml: 0.2,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 599px) ': {
    ml: 0.2,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 992px) ': {
    ml: 19,
    width: '55%',
  },
  '@media (min-width: 1024px) ': {
    ml: 20,
    mt: 4,
  },
  '@media (min-width: 1280px) ': {
    ml: 25,
  },
  '@media (min-width: 1440px) ': {
    ml: 30,
  },
  '@media (min-width: 2560px) ': {
    ml: 45,
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
          <Typography sx={{ display: 'inline', color: '#fc1703', fontSize: 26, fontWeight: 600, }}variant='h5'> 1 </Typography>
          <Typography sx={{ display: 'inline', fontWeight: 600, color: '#000000' }}>Cancelado</Typography>
        </Box>

        <Box sx={Box3}>
          <Typography sx={{ display: 'inline', color: '#fcf403' , fontSize: 26, fontWeight: 600, }}variant='h5'> 2 </Typography>
          <Typography sx={{ display: 'inline', fontWeight: 600, color: '#000000' }}>Falta</Typography>
        </Box>

      </Box>
  )
}
