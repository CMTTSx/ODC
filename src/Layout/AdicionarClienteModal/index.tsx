/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  border: '2px solid ',
  borderColor: '#028be6',
  borderRadius: 1,
  boxShadow: 2,
  p: 4,

  '@media (min-width: 320px)': {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    width: 170,
    height: 500,
    mt: 8,
    ml: 5,
  },
  '@media (min-width: 375px)': {
    display: 'flex',
    flexDirection: 'column',
    width: 225,
    height: 500,
    mt: 8,
    ml: 5,
  },
  '@media (min-width: 390px)': {
    display: 'flex',
    flexDirection: 'column',
    width: 230,
    height: 500,
    mt: 7,
    ml: 5,
  },

  '@media (min-width: 425px)': {
    display: 'flex',
    flexDirection: 'column',
    width: 270,
    height: 500,
    mt: 8,
    ml: 5,
  },
  '@media (min-width: 600px)': {
    width: 250,
    mt: 13,
    ml: 0,
  },
  '@media (min-width: 768px)': {
    ml: 0,
    mt: 5.8,
    width: 500,
    height: 600,
  },
  '@media (min-width: 800px)': {
    ml: 0,
    mt: -7,
    width: 500,
  },
  '@media (min-width: 1024px)': {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    height: 630,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 2,
    p: 4,
    mt: 0,
    ml: 0,
  },
  '@media (min-width: 1440px)': {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    height: 580,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 2,
    p: 4,
    mt: 5,
    ml: -5,
  },
  '@media (min-width: 2560px)': {
    mt: -13,
  },

};

const TypoCadastroCliente = {
  fontWeight: 600,
  fontSize: 22,
  textAlign: 'center',
  mt: 2,
}

const cpfConfig = {
  mt: 2,
  width: '45%',

  '@media (min-width: 320px)': {
    width: '100%',
    mt: 1,
  },
  '@media (min-width: 375px)': {
    width: '100%'
  },
  '@media (min-width: 425px)': {
    width: '100%'
  },
  '@media (min-width: 768px)': {
    width: '100%'
  },
  '@media (min-width: 1024px)': {
    width: '100%'
  },
}

const dataConfig = {
  mt: 2,
  ml: 1,
  width: '33%',

  '@media (min-width: 320px)': {
    width: '100%',
    mt: 1,
    ml: 0,
  },
  '@media (min-width: 375px)': {
    width: '100%',
    ml: 0,
  },
  '@media (min-width: 425px)': {
    width: '100%',
    ml: 0,
  },
  '@media (min-width: 768px)': {
    width: '100%',
    ml: 0,
  },
}

const sexoConfig = {
  width: 150,
  ml: 75,
  mt: -7,


  '@media (min-width: 320px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 375px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 425px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 768px)': {
    ml: 0,
    mt: 1,
    width: '50%',
  },

}

const estadoCivilConfig = {
  width: 234,
  mt: -7,
  mb: 5,
  ml: 34,

  '@media (min-width: 320px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 375px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 425px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 768px)': {
    width: '45%',
    mt: -15,
    ml: 34.5,
  },
  '@media (min-width: 1024px)': {
    width: '50%',
    mt: 1,
    mb: 5,
    ml: 0,
  },
}

const telefoneConfig = {
  mt: 1,

  '@media (min-width: 768px)': {
    width: '50%',
  },
  '@media (min-width: 1024px)': {
    width: '48%',
    mt: -7,
    ml: 48,
  },
}

const EnderecoConfig = {
  mt: 1,
  mb: 1,

  '@media (min-width: 320px)': {
    mt: -2,
  },
  '@media (min-width: 375px)': {
    mt: -2,
  },
  '@media (min-width: 425px)': {
    mt: -2,
  },
  '@media (min-width: 768px)': {
    mt: 10,
  },
  '@media (min-width: 1024px)': {
    mt: -2.5,
  },
  '@media (min-width: 1440px)': {
    mt: -2,
  },

}

const logradouroConfig = {
  width: '40%',

  '@media (min-width: 320px)': {
    width: '100%',
  },
  '@media (min-width: 375px)': {
    width: '100%',
  },
  '@media (min-width: 425px)': {
    width: '100%',
  },
}

const numeroConfig = {
  ml: 0.5,
  width: '20%',

  '@media (min-width: 320px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  '@media (min-width: 375px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  '@media (min-width: 425px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },

}

const complementoConfig = {
  ml: 0.5,
  width: '38%',

  '@media (min-width: 320px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  '@media (min-width: 375px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  '@media (min-width: 425px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
}

const estadoConfig = {
  width: 234,
  mt: 2,

  '@media (min-width: 320px)': {
    width: '100%',
  },
  '@media (min-width: 375px)': {
    width: '100%',
  },
  '@media (min-width: 425px)': {
    width: '100%',
  },

}

const cidadeConfig = {
  width: 234,
  mt: -6.9,
  ml: 30,

  '@media (min-width: 320px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 375px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 425px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
}

const AddButtonConfig = {
  display: 'inline',
  backgroundColor: '#4DEA80',
  color: '#fff',
  fontWeight: 600,

  "&:hover": {
    backgroundColor: '#05e340'
  },

  '@media (min-width: 320px)': {
    ml: -70,
  },
  '@media (min-width: 375px)': {
    ml: -67,
  },
  '@media (min-width: 410px)': {
    ml: -66.5,
  },
  '@media (min-width: 425px)': {
    ml: -65,
  },
  '@media (min-width: 768px)': {
    ml: -50,
  },
  '@media (min-width: 1024px)': {
    ml: -2,
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

}

export default function BasicModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [nomeCompleto, setNomeCompleto] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [age, setAge] = React.useState('');
  const [sexo, setSexo] = React.useState('');
  const [estadoCivil, setEstadoCivil] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [administrador, setAdministrador] = React.useState('');
  const [recepcionista, setRecepcionista] = React.useState('');
  const [odontologo, setOdontologo] = React.useState('');




  return (
    <div>
      <Button onClick={handleOpen} sx={{
        backgroundColor: '#028be6',
        color: '#fff',
        fontWeight: 600,
        width: 120,
        height: 50,

        "&:hover": {
          backgroundColor: '#089bfc',
        }

      }}>Adicionar Cliente</Button>
      <Modal
        hideBackdrop={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={TypoCadastroCliente}>
            Adicionar Cliente
          </Typography>

          <Typography sx={{mt: 2, mb: 1}}>Dados Pessoais</Typography>

          <TextField
            required
            label="Nome Completo"
            fullWidth={true}
            sx={{
              mt: 1,
            }}
          />

          <TextField
            required
            label="CPF"
            sx={cpfConfig}
          />

          <TextField
            required
            sx={dataConfig}
            type="date"
            value={setAge}
          />

          <Box sx={sexoConfig}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
              <Select
                label="Sexo"
              >
                <MenuItem value={'M'}>Masculino</MenuItem>
                <MenuItem value={'F'}>Feminino</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            required
            label="Telefone"
            sx={telefoneConfig}
            type='number'
          />

          <Box sx={estadoCivilConfig}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Estado Civil</InputLabel>
              <Select
                label="Estado Civil"
              >
                <MenuItem value={'S'}>Solteiro</MenuItem>
                <MenuItem value={'C'}>Casado</MenuItem>
                <MenuItem value={'D'}>Divorciado</MenuItem>
                <MenuItem value={'V'}>Viúvo</MenuItem>

              </Select>
            </FormControl>
          </Box>

          <Typography sx={EnderecoConfig}>Endereço</Typography>

          <TextField
            required
            label="Logradouro"
            sx={logradouroConfig}
          />

          <TextField
            required
            label="Número"
            sx={numeroConfig}
          />

          <TextField
            required
            label="Complemento"
            sx={complementoConfig}
          />

          <Box sx={estadoConfig}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                value={estado}
                label="Estado"
              >
                <MenuItem value={'E'}>Estado</MenuItem>

              </Select>
            </FormControl>
          </Box>

          <Box sx={cidadeConfig}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
              <Select
                value={cidade}
                label="Cidade"
              >
                <MenuItem value={'C'}>Cidade</MenuItem>

              </Select>
            </FormControl>
          </Box>

          <Box sx={{
            mt: 10,
            ml: 68,
          }}>
            <Button sx={AddButtonConfig}>Adicionar</Button>
            <Button
              onClick={handleClose}
              sx={CancelButtonConfig}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
