import React from 'react';
import { Box, Typography } from '@mui/material';
import AtendimentoPopover from '../AtendimentoPopover';

const BoxConfig = {
  border: 1,
  borderColor: '#dbdbdb',
  borderLeft: 5,
  borderLeftColor: '#05299E',
  boxShadow: 2,
  maxHeight: 54,
  mt: 1,


  '@media (min-width: 320px) and (max-width: 374px)': {
    height: '7em',
    maxHeight: 700,

  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    height: '7em',
    maxHeight: 700,

  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    height: '7em',
    maxHeight: 700,

  },
  '@media (min-width: 3840px)': {
    height: '4em',
    maxHeight: 700,
    width: '60em',
    ml: -5,
  },

}

const BoxNomeEIdade = {
  pl: 2,
  display: 'flex',

  '@media (min-width: 320px) and (max-width: 389px)': {
    flexDirection: 'column',
    ml: '1em',
    mt: 1,
    fontSize: 15,
    
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    flexDirection: 'column',
    ml: '1em',
    mt: 1,
    fontSize: 15,
    
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    flexDirection: 'column',
    ml: '1em',
    mt: 1,
    fontSize: 12,
    
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    flexDirection: 'column',
    ml: '3em',
    mt: 1,
    fontSize: 17,
  },

}

const BoxDateHour = {
  display: 'flex',

  '@media (min-width: 320px) and (max-width: 389px)': {
    flexDirection: 'column',
    ml: '1em',
    mt: 1,
    alignText: 'center',

  },
  '@media (min-width: 389px) and (max-width: 424px)': {
    flexDirection: 'column',
    ml: '1em',
    mt: 1,
    alignText: 'center',

  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    flexDirection: 'column',
    ml: '3.2em',
    mt: -1,
    alignText: 'center',
    
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    flexDirection: 'row',
    ml: 0,
    mt: 0.4,
    alignText: 'center',
    
  },
}

const TypoName = {
  fontWeight: 600,

  '@media (min-width: 320px) and (max-width: 389px)': {
    fontSize: 12,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    fontSize: 15,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    fontSize: 17,
  },

}

const TypoAge = {
  pl: 2,
  mt: 0.8,

  '@media (min-width: 320px) and (max-width: 389px)': {
    flexDirection: 'column',
    ml: '-1.8em',
    mt: 1,
    fontSize: 10,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    flexDirection: 'column',
    ml: '-0.5em',
    mt: -0.1,
    fontSize: 14,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    flexDirection: 'column',
    ml: -4,
    mt: 0.4,
    fontSize: 14,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    flexDirection: 'column',
    ml: '-0.5em',
    mt: 0.4,
    fontSize: 14,
  },
}

const TypoDateHour = {
  pl: 2,

  '@media (min-width: 320px) and (max-width: 389px)': {
    ml: '0.8em',
    mt: 1,
    fontSize: 12,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    ml: 5,
    mt: -1,
    fontSize: 12,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: -0.1,
    mt: 1,
    fontSize: 17,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 0.2,
    mt: 0.4,
    fontSize: 15,
  },
}

const TypoStatus = {
  pl: 1,
  pt: 0.25,
  color: '#05299E',
  fontWeight: 600,

  '@media (min-width: 320px) and (max-width: 389px)': {

    ml: 1,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {

    ml: 4,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {

    ml: 2,
  },


  }

const AtendimentoPopoverConfig = {
  ml: -5,
  mt: -0.5,

  '@media (min-width: 320px) and (max-width: 389px)': {
    ml: -70,
  },
  '@media (min-width: 390px)': {
    ml: -62.5,
  },
  '@media (min-width: 425px)': {
    ml: -62.5,
  },
  '@media (min-width: 3840px)': {
    ml: -40,
  },

}

export default function ServiceBar() {
  return (
    <Box sx={BoxConfig}>
    
    <Box sx={BoxNomeEIdade}>
      <Typography variant='h6' sx={TypoName}>Mayara Souza Silva</Typography>
      <Typography sx={TypoAge}>26 Anos 7 Meses e 28 dias</Typography>
    </Box>

    <Box sx={BoxDateHour}>
      <Typography sx={TypoDateHour}>22/12/2022 10:30 </Typography>
      <Typography sx={TypoStatus}>Em Atendimento</Typography>
    </Box>

    <Box sx={AtendimentoPopoverConfig}><AtendimentoPopover /></Box>


    </Box>
  )
}
