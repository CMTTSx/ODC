import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Box } from '@mui/material';

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

  const BoxConfig = {
      ml: 147,
      mt: -9,

      '@media (min-width: 320px) and (max-width: 375px)': {
        ml: 87,
        mt: -10,
    
      },
      '@media (min-width: 390px) and (max-width: 424px)': {
        ml: 87,
        mt: -10,
    
      },
      '@media (min-width: 425px) and (max-width: 767px)': {
        ml: 88,
        mt: -7,
    
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        ml: 125,
        mt: -8,
    
      },
  }

  return (
    <div>
      <Button 
      sx={BoxConfig}
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
    </div>
  );
}
