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
  '@media (min-width: 320px) and (max-width: 359px)': {
    width: 164,
    ml: 4.8,
    mt: 17,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    width: 164,
    ml: 4.8,
    mt: 9,
  },
  '@media (min-width: 375px) and (max-width: 383px)': {
    width: 210,
    ml: 5,
    mt: 17,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    width: 230,
    ml: 5,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    width: 230,
    ml: 5,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    width: 230,
    ml: 4.5,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    width: 263,
    ml: 2.8,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    width: 400,
    ml: 0,
    mt: -25,
  },
  '@media (min-width: 2560px)': {
    ml: -15,
  },
  '@media (min-width: 3840px)': {
    ml: 20,
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
  '@media (min-width: 320px) and (max-width: 349px)': {
    ml: -21.5,
    mt: -5,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: -21,
    mt: -5,
  },
  '@media (min-width: 375px) and (max-width: 383px)': {
    ml: -24.5,
    mt: -5,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    ml: -23,
    mt: -3,
  },
  '@media (min-width: 390px) and (max-width: 411px)': {
    ml: -24,
    mt: 1,
  },
  '@media (min-width: 412px) and (max-width: 424px)': {
    ml: -24,
    mt: -3,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: -23,
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


  '@media (min-width: 320px) and (max-width: 349px)': {
    ml: -11.5,
    mt: 6,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: -11.8,
    mt: 6,
  },
  '@media (min-width: 375px) and (max-width: 383px)': {
    ml: 2,
    mt: -5,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    ml: 3,
    mt: -3,
  },
  '@media (min-width: 390px) and (max-width: 411px)': {
    ml: 2,
    mt: 1,
  },
  '@media (min-width: 412px) and (max-width: 424px)': {
    ml:2,
    mt: -3,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: 3,
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
