import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Navbar from '../Layout/Navbar';
import Breadcrumbs from '../Layout/Breadcrumbs/Gerenciamento';
import Sidebar from '../Layout/Sidebar';
import GerenciamentoPopover from '../Layout/GerenciamentoPopover';



const TypoGerenciamento = {
  fontSize: 40,
  color: '#000000',
  mt: 10,
  ml: 50,
  fontWeight: 600,
  

  '@media (min-width: 320px) and (max-width: 375px)': {
    fontSize: 16.8,
    ml: 3,
    mt: 1,
    mb: 2,
    display: 'flex',
},
  '@media (min-width: 375px) and (max-width: 424px)': {
    fontSize: 20,
    ml: 2.7,
    mt: 2,
    display: 'flex',
},
  '@media (min-width: 425px) and (max-width: 599px)': {
    fontSize: 20,
    ml: 4.4,
    mt: 2,
    display: 'flex',
},
  '@media (min-width: 600px) and (max-width: 767px)': {
    fontSize: 25,
    ml: 6,
    mt: 2,
    display: 'flex',
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    fontSize: 30,
    ml: 9,
    display: 'flex',
},
  '@media (min-width: 1023px) and (max-width: 1024px)': {
  fontSize: 30,
  ml: 18,
  display: 'flex',
},
'@media (min-width: 1025px) and (max-width: 1280px)': {
  fontSize: 30,
  ml: 22,
  display: 'flex',
},
'@media (min-width: 1281px) and (max-width: 1440px)': {
  fontSize: 35,
  ml: 25,
  display: 'flex',
},
'@media (min-width: 2560px)': {
  fontSize: 30,
  ml: 60,
  display: 'flex',
},
'@media (min-width: 3840px)': {
  fontSize: 60,
  ml: 100,
  display: 'flex',
},
}

const TypoProfile = {
  ml: 2,
  mt: 1.6,
  fontSize: 18,
  fontWeight: 600,
  color: '#000000',

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 1.3,
    mt: 1,
    fontSize: 16,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 2,
    fontSize: 16,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: 2,
    mt: 1,
    fontSize: 16,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 3,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 3,
  }
}

const TypoName = {
  ml: 3,
  color: '#000000',
  pb: -2,

  '@media (min-width: 320px) and (max-width: 375px)': {
    ml: 2,
    mt: -1,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 2.5,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: 3.5,
    mt: -0.4,
    fontSize: 12,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 5,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 4.5,
  },
  
}

const BoxConfig = {
  border: 1,
  ml: 20,
  mt: 8,
  width: '60%',
  height: '4.5em',

  '@media (min-width: 320px) and (max-width: 374px)': {
    width: '14.5em',
    height: '3.5em',
    ml: 3,
    mt: -1,
  },
  '@media (min-width: 375px) and (max-width: 383px)': {
    width: '17em',
    height: '4em',
    ml: 2.7,
    mt: -1,
  },
  '@media (min-width: 384px) and (max-width: 410px)': {
    width: '17em',
    height: '4em',
    ml: 2.7,
    mt: 1,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    width: '17em',
    height: '4em',
    ml: 2.7,
    mt: 1,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    width: '20.5em',
    height: '3em',
    ml: 1.3,
    mt: 1,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 4,
    width: '23em',
    height: '3.8em',
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    width: '35em',
    ml: -1,
    mt: 2,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    width: '40em',
    ml: 5,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    width: '40em',
    ml: 10,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    width: '40em',
    ml: 15,
  },
  '@media (min-width: 2560px)': {
    width: '50em',
    ml: 40,
  },
  '@media (min-width: 3840px)': {
    width: '50em',
    ml: 100,
  }
}

const PopoverConfig = {
  ml: 8,

  '@media (min-width: 320px) and (max-width: 375px)': {
    ml: -78,
    mt: 1,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: -74,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: -67,
    mt: 0.5,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: -63,
    mt: 1,
  },
  
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: -40,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: -30,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: -30,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: -30,
  },
  '@media (min-width: 2560px)': {
    ml: -10,
  },
}

export default function Gerenciamento() {
  return (
    <Box sx={{ width: '100%', height: '100%', }}>
      <Navbar />
      <Breadcrumbs />
      <Box sx={{backgroundColor: '#fff'}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2} sx={{zIndex: 1000}}>
          <Box sx={{zIndex: 1000}}><Sidebar /></Box>
        </Grid>
        <Grid item xs={10}  >
            <Typography sx={TypoGerenciamento}>Gerenciamento de Usuários</Typography>

            <Box sx={BoxConfig}>
              <Typography sx={TypoProfile}>Administrador(a)</Typography>

              <Typography sx={TypoName}>Fabíola T. Reis</Typography>

              <Box sx={PopoverConfig}><GerenciamentoPopover /></Box>

            </Box>

        </Grid>
      </Grid></Box>
    </Box>
  );
}
