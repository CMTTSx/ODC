import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import DatePicker from '../DatePicker';


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
  '@media (min-width: 320px)': {
    width: 180,
    ml: 4,
    mt: 17,
  },
  '@media (min-width: 360px)': {
    width: 200,
    ml: 4,
    mt: 9,
  },
  '@media (min-width: 375px)': {
    width: 236,
    ml: 3.5,
    mt: 17,
  },
  '@media (min-width: 384px)': {
    width: 230,
    ml: 4,
  },
  '@media (min-width: 390px)': {
    width: 230,
    ml: 3,
  },
  '@media (min-width: 410px)': {
    width: 250,
    ml: 3.5,
  },
  '@media (min-width: 425px)': {
    width: 280,
    ml: 4,
  },
  '@media (min-width: 600px)': {
    width: 263,
    ml: 0,
    mt: -10,
  },
  '@media (min-width: 1024px)': {
    width: 400,
    ml: 0,
    mt: -25,
  },
  '@media (min-width: 1280px)': {
    width: 400,
    ml: 0,
    mt: 0,
  },
  '@media (min-width: 2560px)': {
    ml: 0,
  },
  '@media (min-width: 3840px)': {
    ml: 0,
    mt: -80,
    width: 1000,
  },

};

const AgendarButtonConfig = {
  display: 'inline',
  backgroundColor: '#4DEA80',
  color: '#fff',
  fontWeight: 600,

  "&:hover": {
    backgroundColor: '#05e340'
  },
  '@media (min-width: 320px)': {
    ml: -26,
    mt: -5,
  },
  '@media (min-width: 360px)': {
    ml: -24.8,
    mt: -5,
  },
  '@media (min-width: 375px)': {
    ml: -24,
    mt: -5,
  },
  '@media (min-width: 384px)': {
    ml: -24,
    mt: -3,
  },
  '@media (min-width: 390px)': {
    ml: -24,
    mt: 1,
  },
  '@media (min-width: 410px)': {
    ml: -22,
    mt: -3,
  },
  '@media (min-width: 425px)': {
    ml: -21.2,
    mt: -2,
  },
  '@media (min-width: 768px)': {
    ml: -21,
    mt: -2,
  },
  '@media (min-width: 810px)': {
    ml: -21,
    mt: -2,
  },
  '@media (min-width: 1024px)': {
    ml: 0,
    mt: -2,
  },
  '@media (min-width: 1280px)': {
    ml: 0,
    mt: -2,
  },
  '@media (min-width: 3840px)': {
    ml: 74,
    mt: -2,
  },
  
}

const CancelButtonConfig = {
  display: 'inline',
  backgroundColor: '#EF4444',
  color: '#fff',
  fontWeight: 600,
  ml: 1,

  "&:hover": {
    backgroundColor: '#db0b00'
  },


  '@media (min-width: 320px)': {
    ml: 0.8,
    mt: -5,
  },
  '@media (min-width: 360px)': {
    ml: 0.8,
    mt: -5,
  },
  '@media (min-width: 375px)': {
    ml: 2,
    mt: -5,
  },
  '@media (min-width: 384px)': {
    ml: 3,
    mt: -3,
  },
  '@media (min-width: 390px)': {
    ml: 2,
    mt: 1,
  },
  '@media (min-width: 410px)': {
    ml: 2,
    mt: -3,
  },
  '@media (min-width: 425px)': {
    ml: 3,
    mt: -2,
  },
  '@media (min-width: 768px)': {
    ml: 2,
    mt: -2,
  },
  '@media (min-width: 1024px)': {
    ml: 1.3,
    mt: -2,
  },
}

export default function BasicModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{
        backgroundColor: '#028be6',
        color: '#fff',
        fontWeight: 600,

        "&:hover": {
          backgroundColor: '#089bfc',
        }

      }}>Agendar Paciente</Button>
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
          }}>
            Agendar Atendimento
          </Typography>
          
          <Box sx={{
            mt: 3,
          }}>

          <TextField id="outlined-basic" label="Digite o nome do paciente" variant="outlined" fullWidth={true} />
          
          
          <Box sx={{
            mt: 2,
          }}>
          <DatePicker />
          </Box>

          </Box>
          <Box sx={{
            mt: 5,
            ml: 25,
          }}>
            <Button sx={AgendarButtonConfig}>Agendar</Button>
            <Button
              onClick={handleClose}
              sx={CancelButtonConfig}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
