import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Box } from '@mui/material';


const BoxConfig = {

  '@media (min-width: 320px)': {
    ml: 20,
    mt: -8,
  },
  '@media (min-width: 375px)': {
    ml: 26,
    mt: -8,
  },
  '@media (min-width: 425px)': {
    ml: 32,
    mt: -8.5,
  },
  '@media (min-width: 768px)': {
    ml: 58,
    mt: -3.7,
  },
  '@media (min-width: 1024px)': {
    ml: 70,
    mt: -5.2,
  },
  '@media (min-width: 1440px)': {
    ml: 106,
    mt: -3.5,
  },
  '@media (min-width: 2560px)': {
    ml: 190,
    mt: -4,
  },

}

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={BoxConfig}>
      <Button 
      onClick={handleClick}>
        <BsThreeDotsVertical size={'1.5em'} color={"#000000"} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Button sx={{
        fontWeight: 600,
        color: '#000000',
        textAlign: 'justify',
       }}>Editar Atendimento</Button>
       <Button sx={{
        fontWeight: 600,
        color: '#cf0700',
       }}>Cancelar Atendimento</Button>
        </Box>


      </Popover>
    </Box>
  );
}
