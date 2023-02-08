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

  '@media (min-width: 320px) and (max-width: 359px)': {
    width: '16%',
    ml: -37.6,
    mt: -100,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    width: '13em',
    ml: -38,
    mt: -79,
  },
  '@media (min-width: 375px) and (max-width: 383px)': {
    width: '20%',
    ml: -37.7,
    mt: -65,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    width: '21%',
    ml: -37.6,
    mt: -90,
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    width: '20%',
    ml: -38,
    mt: -53,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: -38,
    mt: -80,
    width: 240,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    width: '24%',
    ml: -38,
    mt: -50,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    width: '32%',
    ml: -34,
    mt: -65,
  },
  '@media (min-width: 768px) and (max-width: 1022px)': {
    ml: -17,
    mt: -18,
    width: 600,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    top: '40%',
    left: '51%',
  },
  '@media (min-width: 2560px)': {
    ml: -40,
    mt: -30,
  },

};

const ButtonConfig = {
  mt: 5,
  ml: 62,

  '@media (min-width: 320px) and (max-width: 359px)': {
    ml: -2.2,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    ml: 3,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 4,
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    ml: 4,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    ml: 7,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    ml: 10,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    ml: 30,
  },
  '@media (min-width: 768px) and (max-width: 1022px)': {
    ml: 51,
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
