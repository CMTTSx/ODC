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
  width: '100%',
  
  '@media (max-width: 599px) ': {
    overflow: 'hidden',
    height: '2.8rem',
  },
  '@media (min-width: 600px)': {
    overflow: 'hidden',
    height: '4rem',
  },
  '@media (min-width: 905px)': {
    overflow: 'hidden',
    height: '5rem',
  },
  '@media (min-width: 1440px)': {
    overflow: 'hidden',
    height: '5rem',
  },
  '@media (min-width: 2560px)': {
    overflow: 'hidden',
    height: '8rem',
  },

}

const Logo = {
  backgroundImage: `url(${Logotipo})`,
  width: '16rem',
  height: '5rem',
  color: "#f5f5f5",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  '@media (max-width: 599px) ': {
    width: '8rem',
    height: '4rem',
    backgroundSize: "contain",
    backgroundPosition: "center",
    mt: -0.4,

  },
  '@media (min-width: 600px) ': {
    width: '13rem',
    backgroundSize: "contain",
  },
  '@media (min-width: 768px)': {
    width: '13rem',
    backgroundSize: "contain",
  },
  '@media (min-width: 1024px)': {
    width: '15rem',
    backgroundSize: "contain",
  },
  '@media (min-width: 1440px)': {
    width: '15rem',
    backgroundSize: "contain",
  },
  '@media (min-width: 2560px)': {
    width: '25em',
    height: '25em',
    backgroundSize: "contain",
  },

}

const TypographyTopBar = {
  ml: 175,
  mt: 2.8,

  '@media (min-width: 280px)': {
    mt: 1.8,
    ml: 1,
  },
  '@media (min-width: 320px)': {
    mt: 1.8,
    ml: 6.5,
  },
  '@media (min-width: 375px)': {
    mt: 1.8,
    ml: 13,
  },
  '@media (min-width: 425px)': {
    mt: 1.8,
    ml: 20,
  },
  '@media (min-width: 500px)': {
    mt: 1.8,
    ml: 28,
  },
  '@media (min-width: 550px)': {
    mt: 1.8,
    ml: 34,
  },
  '@media (width: 599px) ': {
    mt: 1.8,
    ml: 40,
  },
  '@media (min-width: 768px)': {
    mt: 2.5,
    ml: 48,
  },
  '@media (min-width: 1024px)': {
    mt: 2.8,
    ml: 82,
  },
  '@media (min-width: 1280px)': {
    mt: 2.8,
    ml: 110,
  },
  '@media (width: 1440px)': {
    mt: 3,
    ml: 125,
  },
  '@media (width: 2560px)': {
    mt: 5,
    ml: 230,
  },

}

const TypographyConfig = {
  color: '#fff',

  '@media (min-width: 320px) ': {
    mt: -0.1,
    ml: -0.5,
    fontSize: '0.65rem',
  },
  '@media (min-width: 600px) ': {
    mt: 0.2,
    ml: -10,
    fontSize: '0.9rem',
  },
  '@media (min-width: 768px)': {
    mt: -0.5,
    fontSize: '1rem',
  },
  '@media (min-width: 991px)': {
    mt: 0.3,
    ml: 15,
    fontSize: '1rem',
  },
  '@media (min-width: 1440px)': {
    mt: -0.1,
    ml: -5,
    fontSize: '1rem',
  },
  '@media (min-width: 1920px)': {
    mt: -0.1,
    ml: 60,
    fontSize: '1rem',
  },
  '@media (min-width: 2560px)': {
    mt: -0.1,
    ml: 5,
    fontSize: '1.5rem',
  },
  '@media (min-width: 3840px)': {
    mt: 1,
    ml: '90em',
    fontSize: '1.5rem',
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

        <Typography sx={TypographyConfig}>Fabíola T. Reis</Typography>
        <Typography sx={TypographyConfig}>Recepcionista</Typography>
      </Box>


      <MenuArrow />


    </Box>
  )
}
