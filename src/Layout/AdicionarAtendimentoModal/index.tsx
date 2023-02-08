import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #028be6',
  borderRadius: 1,
  boxShadow: 2,
  p: 4,

  '@media (min-width: 320px) and (max-width: 375px)': {
    width: 150,
    mt: 10,
    ml: 5,
  },
  '@media (min-width: 375px) and (max-width: 383px)': {
    width: 220,
    mt: 10,
    ml: 5,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    width: 200,
    mt: -60,
    ml: -22,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    width: 200,
    mt: 1,
    ml: 5,

  },
  '@media (min-width: 425px) and (max-width: 764px)': {
    width: 220,
    mt: 10,
    ml: 5,

  },
  '@media (min-width: 768px) and (max-width: 799px)': {
    ml: -8,
  },
  '@media (min-width: 800px) and (max-width: 1023px)': {
    ml: -8,
    mt: -40,
  },

  
};

const ButtonConfig = {
  mt: 5,
  ml: 23,

  '@media (min-width: 320px) and (max-width: 767px)': {
    ml: -5,
  },
  '@media (min-width: 390px)': {
    ml: 1,
  },
  '@media (min-width: 425px)': {
    ml: 22.5,
  },
  

}

const AdicionarConfig = {
  display: 'inline',
  backgroundColor: '#4DEA80',
  color: '#fff',
  fontWeight: 600,

  "&:hover": {
    backgroundColor: '#05e340'
  },

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 8,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 5.2,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {

    ml: -2,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {

    ml: -22,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: -10,
  },


}

const CancelarConfig = {
  display: 'inline',
  backgroundColor: '#EF4444',
  color: '#fff',
  fontWeight: 600,
  ml: 1,
  "&:hover": {
    backgroundColor: '#db0b00'
  },

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 8,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 18,
    mt: -7.3,
  },
  '@media (min-width: 425px) and (max-width: 768px)': {
    mt: -0.1,
    ml: 1,
  },
  
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen} sx={{
        backgroundColor: '#028be6',
        color: '#fff',
        fontWeight: 600,
        "&:hover": {
          backgroundColor: '#089bfc',
        }

      }}>Adicionar Atendimento</Button>
      <Modal
        hideBackdrop={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{
            fontWeight: 600,
            fontSize: 22,
            textAlign: 'center',
            ml: 2.3
          }}>
          Adicionar Atendimento
          </Typography>

          <Box sx={{
            mt: 2,
          }}>
          <TextField id="outlined-basic" label="Digite o nome do paciente" variant="outlined" fullWidth={true} />

          </Box>
         
          <Box sx={ButtonConfig}>
          <Button sx={AdicionarConfig}>Adicionar</Button>
          <Button
          onClick={handleClose}
          sx={CancelarConfig}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
