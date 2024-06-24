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
    width: '4em',
    overflow: 'hidden',
    boxShadow: 5,
    backgroundColor: '#F1F4FE',
    pb: 5,
    
    "&:hover": {
      width: '20em',
    },

  };

  const IconBar = {
    ml: 0,
    mt: 5,
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
            <Box sx={Texto}> <Typography sx={{ mt: -4.2, ml: 16, fontSize: '1rem' }}>Dashboard</Typography> </Box>

          </Link>
        </LinkRouter>

        <LinkRouter to='/agenda' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={AgendaIcon} alt="AgendaIcon" width={48} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -4.2,  ml: 17, fontSize: '1rem' }}>Agenda</Typography> </Box>
          </Link>
        </LinkRouter>

        <LinkRouter to='/clientes' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={ClientesIcon} alt="ClientesIcon" width={48} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -5, ml: 17, fontSize: '1rem', width: '30px' }}>Clientes</Typography> </Box>
          </Link>
        </LinkRouter>

        <LinkRouter to='/financeiro' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={FinanceiroIcon} alt="FinanceiroIcon" width={48} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -5, ml: 16.5, fontSize: '1rem', width: '30px' }}>Financeiro</Typography> </Box>
          </Link>
        </LinkRouter>

        <LinkRouter to='/gerenciamento' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={UsuariosIcon} alt="UsuariosIcon" width={50} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -4.2, ml: 15, fontSize: '1rem' }}>Gerenciamento</Typography> </Box>
          </Link>
        </LinkRouter>

        <LinkRouter to='/suporte' style={{ textDecoration: 'none' }}>
          <Link underline={'none'} color={'#0f0f0f'}>
            <Button sx={IconBar}> <img src={SuporteIcon} alt="SuporteIcon" width={40} /> </Button>
            <Box sx={Texto}> <Typography sx={{ mt: -4, ml: 17.5, fontSize: '1rem' }}>Suporte</Typography> </Box>
          </Link>
        </LinkRouter>

      </Box>

    </div>
  )
}
