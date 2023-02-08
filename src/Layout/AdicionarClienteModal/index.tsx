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
  border: '2px solid #028be6',
  borderRadius: 1,
  boxShadow: 2,
  p: 4,

  '@media (min-width: 320px) and (max-width: 374px)': {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    width: 170,
    height: 500,
    mt: 8,
    ml: 5,
  },
  '@media (min-width: 360px) and (max-width: 374px)': {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    width: 207,
    height: 500,
    mt: 8,
    ml: 5,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    width: 225,
    height: 500,
    mt: 8,
    ml: 5,
  },
  '@media (min-width: 390px) and (max-width: 410px)': {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    width: 230,
    mt: 20,
    ml: 0,
  },
  '@media (min-width: 411px) and (max-width: 424px)': {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    width: 260,
    height: 500,
    mt: 0,
    ml: 5,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    width: 270,
    height: 500,
    mt: 8,
    ml: 5,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    width: 250,
    mt: 13,
    ml: 0,
  },
  '@media (min-width: 768px) and (max-width: 809px)': {
    ml: 0,
    mt: 5.8,
    width: 500,
    height: 600,
  },
  '@media (min-width: 800px) and (max-width: 1022px)': {
    ml: 0,
    mt: -7,
    width: 500,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    ml: 5,
    mt: -20,
  },
  '@media (min-width: 1280px) and (max-width: 1438px)': {
    ml: 0,
    mt: 5,
  },
  '@media (min-width: 1439px) and (max-width: 1440px)': {
    ml: 0,
    mt: -5,
  },
  '@media (min-width: 2560px)': {
    ml: -12,
    mt: -5,
  },

};

const TypoCadastroCliente = {
  fontWeight: 600,
  fontSize: 22,
  textAlign: 'center',
} 

const cpfConfig = {
  mt: 2,
  width: '45%',

  '@media (min-width: 320px) and (max-width: 374px)': {
    width: '100%',
    mt: 1,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    width: '100%'
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    width: '100%'
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    width: '100%'
  },
}

const dataConfig = {
  mt: 2,
  ml: 1,
  width: '33%',

  '@media (min-width: 320px) and (max-width: 374px)': {
    width: '100%',
    mt: 1,
    ml: 0,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    width: '100%',
    ml: 0,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    width: '100%',
    ml: 0,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    width: '100%',
    ml: 0,
  },
}

const sexoConfig = {
  width: 150,
  ml: 75,
  mt: -7,


  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 0,
    mt: 1,
    width: '50%',
  },

}

const estadoCivilConfig = {
  width: 234,
  mt: -7,
  mb: 5,
  ml: 31,

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 768px) and (max-width: 1022px)': {
    width: '45%',
    mt: -15,
    ml: 34.5,
  },
}

const telefoneConfig = {
  mt: 1,

  '@media (min-width: 768px) and (max-width: 1022px)': {
    width: '50%',
  },
}

const EnderecoConfig = {
  mt: 4,

  '@media (min-width: 320px) and (max-width: 374px)': {
    mt: -2,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    mt: -2,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    mt: -2,
  },
  '@media (min-width: 768px) and (max-width: 1022px)': {
    mt: 10,
  },

}

const logradouroConfig = {
  width: '40%',

  '@media (min-width: 320px) and (max-width: 374px)': {
    width: '100%',
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    width: '100%',
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    width: '100%',
  },
}

const numeroConfig = {
  ml: 0.5,
  width: '20%',

  '@media (min-width: 320px) and (max-width: 374px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  
}

const complementoConfig = {
  ml: 0.5,
  width: '38%',

  '@media (min-width: 320px) and (max-width: 374px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    width: '100%',
    ml: 0,
    mt: 1,
  },
}

const estadoConfig = {
  width: 234,
  mt: 2,

  '@media (min-width: 320px) and (max-width: 374px)': {
    width: '100%',
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    width: '100%',
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    width: '100%',
  },
  
}

const cidadeConfig = {
  width: 234,
  mt: -6.9,
  ml: 30,

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: 0,
    mt: 1,
    width: '100%',
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
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

  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: -64,
    mt: -12,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    ml: -66.5,
    mt: -11,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: -65,
    mt: -10,
  },
  '@media (min-width: 768px) and (max-width: 1022px)': {
    ml: -52,
    mt: -8,
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

  '@media (min-width: 320px) and (max-width: 374px)': {
    mt: -2,
    ml: -12.2,
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    mt: -11,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    mt: -10,
  },
  '@media (min-width: 768px) and (max-width: 1022px)': {
    ml: 1,
    mt: -8,
  },
}

export default function BasicModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  

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
            Cadastro de Cliente
          </Typography>





          <TextField
            required
            id="outlined-required"
            label="Nome Completo"
            fullWidth={true}
            sx={{
              mt: 1,
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="CPF"
            sx={cpfConfig}
          />

          <TextField
            required
            id="outlined-required"
            sx={dataConfig}
            type="date"
          />

          <Box sx={sexoConfig}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
              <Select
                value={age}
                label="Sexo"
                onChange={handleChange}
              >
                <MenuItem value={'M'}>Masculino</MenuItem>
                <MenuItem value={'F'}>Feminino</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            required
            id="outlined-required"
            label="Telefone"
            sx={telefoneConfig}
          />

          <Box sx={estadoCivilConfig}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Estado Civil</InputLabel>
              <Select
                value={age}
                label="Sexo"
                onChange={handleChange}
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
            id="outlined-required"
            label="Logradouro"
            sx={logradouroConfig}
          />

          <TextField
            required
            id="outlined-required"
            label="Número"
            sx={numeroConfig}
          />

          <TextField
            required
            id="outlined-required"
            label="Complemento"
            sx={complementoConfig}
          />

          <Box sx={estadoConfig}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                value={estado}
                label="Estado"
                onChange={handleChange}
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
                onChange={handleChange}
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