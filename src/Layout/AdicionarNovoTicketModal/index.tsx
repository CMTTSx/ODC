import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #028be6',
  borderRadius: 1,
  boxShadow: 2,
  p: 4,

  '@media (min-width: 320px)': {
    width: '54%',
    ml: 3.5,
    mt: 0,
  },
  '@media (min-width: 360px)': {
  },
  '@media (min-width: 375px)': {
  },
  '@media (min-width: 384px)': {
  },
  '@media (min-width: 390px)': {
  },
  '@media (min-width: 411px)': {
  },
  '@media (min-width: 425px)': {
  },
  '@media (min-width: 600px)': {
    top: '40%',
    left: '47%',
  },
  '@media (min-width: 768px)': {
  },
  '@media (min-width: 800px)': {
    top: '40%',
    left: '45%',
  },
  '@media (min-width: 1024px)': {
    top: '40%',
    left: '51%',
  },
  '@media (min-width: 1280px)': {
    top: '50%',
    left: '51%',
  },
  '@media (min-width: 1440px)': {
    top: '48%',
    left: '50%',
  },
  '@media (min-width: 2560px)': {
    ml: 0,
    mt: -30,
  },

};

const ButtonConfig = {
  mt: 5,
  ml: 62,

  '@media (min-width: 320px)': {
    ml: -0.5,
  },
  '@media (min-width: 360px)': {
    ml: 1.3,
  },
  '@media (min-width: 411px)': {
    ml: 2,
  },
  '@media (min-width: 425px)': {
    ml: 3,
  },
  '@media (min-width: 600px)': {
    ml: 8.5,
  },
  '@media (min-width: 768px)': {
    ml: 16,
  },
  '@media (min-width: 1024px)': {
    ml: 45,
  },
  '@media (min-width: 1280px)': {
    ml: 61,
  },
  '@media (min-width: 1440px)': {
    ml: 72,
  },
  '@media (min-width: 1920px)': {
    ml: 103,
  },
  '@media (min-width: 3840px)': {
    ml: 228,
  },

}

export default function AdicionarTicketModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{
        backgroundColor: '#03a9fc',
        color: '#fff',
        fontWeight: 600,
        width: '80%',
        p: 2,
        ml: -80,
        mt: 5,

        "&:hover" : {
        backgroundColor: '#0052e0',

        }
      }}> Adicionar Novo Ticket</Button>
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
            fontSize: 30,
            textAlign: 'center',
            
          }}>
            Suporte
          </Typography>

          <Box

            component="form"
            sx={{
              '& > :not(style)': { mt: 2, width: '97%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Digite seu Nome Completo" variant="outlined" fullWidth={true} />
            <TextField id="outlined-basic" label="Digite seu Email" variant="outlined" fullWidth={true} />

            <TextareaAutosize
              aria-label="textarea"
              placeholder="Digite sua mensagem"
              style={{ width: '96%', height: '4em', fontSize: 18, }}
            />

          </Box>

          <Box sx={ButtonConfig}>
            <Button sx={{
              display: 'inline',
              backgroundColor: '#4DEA80',
              color: '#fff',
              fontWeight: 600,

              "&:hover": {
                backgroundColor: '#05e340'
              }

            }}>Enviar</Button>
            <Button
              onClick={handleClose}
              sx={{
                display: 'inline',
                backgroundColor: '#EF4444',
                color: '#fff',
                fontWeight: 600,
                ml: 1,

                "&:hover": {
                  backgroundColor: '#db0b00'
                }
              }}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
