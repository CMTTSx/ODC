import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import Link from '@mui/material/Link';

//Import Icon
import DashboardIcon from '../../assets/Dashboard.png';
import AgendaIcon from '../../assets/agenda.png';
import SuporteIcon from '../../assets/suporte.svg';
import ClientesIcon from '../../assets/clientes.png';
import FinanceiroIcon from '../../assets/controle-financeiro.png';
import UsuariosIcon from '../../assets/usuarios.png';

export default function Sidebar() {

  const Sidebar = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F1F4FE',
    width: '7em',
    height: '60em',
    overflow: 'hidden',
    boxShadow: 1,
    ml: -1,
    mt: -1,
    pb: 10,
    
    "&:hover": {
      width: '20em',
    },


    '@media (max-width: 425px)': {
      width: '5em',
      overflowX: 'auto',

      "&:hover": {
        width: '5em',
      },

    },
    '@media (max-width: 767px)': {
      width: '5em',
      overflowX: 'auto',

      "&:hover": {
        width: '15em',
      },

    },
    '@media (max-width: 1023px)': {
      width: '5em',
      overflowX: 'auto',

      "&:hover": {
        width: '15em',
      },

    },



  };

  const IconBar = {
    ml: 3,
    mt: 5,

    '@media (max-width: 375px)': {
      ml: 1,
    },
    '@media (max-width: 425px)': {
      ml: 1,
    },
    '@media (max-width: 1023px)': {
      ml: 1,
    },

  }

  const Texto = {

    "&:hover": {
      color: '#aba9a9',
    },

    '@media (max-width: 768px)': {
      ml: -5,
    },
  };

  return (
    <div>
      <Box sx={Sidebar}>



        <LinkRouter to='/paginaInicial' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>

            <Button sx={IconBar}> <img src={DashboardIcon} alt="DashboardIcon" width={48} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -4.2, ml: 18, fontSize: '1.3em' }}>Dashboard</Typography> </Box>

          </Link>
        </LinkRouter>


        <LinkRouter to='/agenda' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={AgendaIcon} alt="AgendaIcon" width={48} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -4.2, ml: 19.2, fontSize: '1.3em' }}>Agenda</Typography> </Box>
          </Link>
        </LinkRouter>

        <LinkRouter to='/clientes' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={ClientesIcon} alt="ClientesIcon" width={48} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -5, ml: 19, fontSize: '1.3em', width: '30px' }}>Clientes</Typography> </Box>
          </Link>
        </LinkRouter>


        <LinkRouter to='/financeiro' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={FinanceiroIcon} alt="FinanceiroIcon" width={48} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -5, ml: 18, fontSize: '1.3em', width: '30px' }}>Financeiro</Typography> </Box>
          </Link>
        </LinkRouter>

        <LinkRouter to='/gerenciamento' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={UsuariosIcon} alt="UsuariosIcon" width={50} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -4.2, ml: 15, fontSize: '1.3em' }}>Gerenciamento</Typography> </Box>
          </Link>
        </LinkRouter>

        <LinkRouter to='/suporte' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={SuporteIcon} alt="SuporteIcon" width={40} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -4, ml: 18, fontSize: '1.3em' }}>Suporte</Typography> </Box>
          </Link>
        </LinkRouter>





      </Box>




    </div>



  )
}
