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
      ml: 0,
      mt: 0,
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
       }}>Editar Agendamento</Button>
       <Button sx={{
        fontWeight: 600,
        color: '#cf0700',
       }}>Cancelar Agendamento</Button>
        </Box>


      </Popover>
    </div>
  );
}
