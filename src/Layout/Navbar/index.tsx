import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

//Button
import MenuArrow from '../MenuProfile';

//Icons
import Logotipo from '../../assets/ODCSYSTEM.png';

//===============BREAKPOINTS===================//

const BoxConfig = {
  display: 'flex',
  bgcolor: '#000744',
  mt: -1,
  ml: -1,
  pr: 1,
}

const Logo = {
  backgroundImage: `url(${Logotipo})`,
  color: "#f5f5f5",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',

  '@media (min-width: 320px)': {
    width: '10rem',
    height: '3rem',
    },
}

const TypographyTopBar = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#f5f5f5',
  fontSize: 10,
  p: '0.3rem',

  '@media (min-width: 375px)': {
    ml: '15%',
  },
  '@media (min-width: 425px)': {
    ml: '25%',
  },
  '@media (min-width: 768px)': {
    ml: '58%',
  },
  '@media (min-width: 1024px)': {
    ml: '66%',
    mt: '0.45rem'
  },
  '@media (min-width: 1440px)': {
    ml: '75%',
  },
  '@media (min-width: 2560px)': {
    ml: '82%',
    mt: '0.8rem'
  },
}

export default function Navbar() {
  return (
    <Box
      sx={BoxConfig}
    >
      <Link to='/paginaInicial'>
        <Box sx={Logo}></Box>
      </Link>

      <Box sx={TypographyTopBar}>
        <Typography sx={{ fontSize: 12 }}>Fabíola T. Reis</Typography>
        <Typography sx={{ fontSize: 12 }}>Recepcionista</Typography>
      </Box>

      <MenuArrow />

    </Box>
  )
}
