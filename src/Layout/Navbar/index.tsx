import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

//Button
import MenuArrow from '../MenuProfile';

//Icons
import Logotipo from '../../assets/ODCSYSTEM.png';


//===============BREAKPOINTS===================//

const BoxConfig = {
  overflow: 'hidden',
  display: 'flex',
  bgcolor: '#000744',
  mt: -1,
  ml: -1,
  pr: 2,
  width: 1,
  '@media (max-width: 599px) ': {
    overflow: 'hidden',
    height: '2.5rem',
  },
  '@media (min-width: 600px) and (max-width: 904px)': {
    overflow: 'hidden',
    height: '4rem',
  },
  '@media (min-width: 905px) and (max-width: 1239px)': {
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
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat',

  '@media (max-width: 599px) ': {
    width: '8rem',
    backgroundSize: "contain",
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
  mt: 2,

  '@media (min-width: 280px) and (max-width: 319px)': {
    mt: 1.8,
    ml: 1,
  },
  '@media (min-width: 320px) and (max-width: 424px)': {
    mt: 1.8,
    ml: 6.5,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    mt: 1.8,
    ml: 13,
  },
  '@media (min-width: 425px) and (max-width: 598px)': {
    mt: 1.8,
    ml: 20,
  },
  '@media (min-width: 500px) and (max-width: 768px)': {
    mt: 1.8,
    ml: 28,
  },
  '@media (min-width: 550px) and (max-width: 768px)': {
    mt: 1.8,
    ml: 34,
  },
  '@media (width: 599px) ': {
    mt: 1.8,
    ml: 40,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    mt: 2.5,
    ml: 48,
  },
  '@media (min-width: 1024px) and (max-width: 1279px)': {
    mt: 2.8,
    ml: 82,
  },
  '@media (min-width: 1280px) and (max-width: 1439px)': {
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

  '@media (max-width: 599px) ': {
    mt: -0.5,
    fontSize: '0.65rem',
  },
  '@media (min-width: 600px) ': {
    mt: -0.2,
    ml: -10,
    fontSize: '0.9rem',
  },
  '@media (min-width: 768px)': {
    mt: -0.5,
    fontSize: '1rem',
  },
  '@media (min-width: 1440px)': {
    mt: -0.1,
    fontSize: '1rem',
  },
  '@media (min-width: 2560px)': {
    mt: -0.1,
    fontSize: '1.5rem',
  },
  '@media (min-width: 3840px)': {
    mt: 1,
    ml: 190,
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
