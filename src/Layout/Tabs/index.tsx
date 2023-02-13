import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ServiceBar from '../ServiceBar';
import Dummybar from '../ServiceBar/DummyBar';
import Dummybar2 from '../ServiceBar/DummyBar2';
import Dummybar3 from '../ServiceBar/DummyBar3';
import Dummybar4 from '../ServiceBar/DummyBar4';
import AtendimentoModal from '../AdicionarAtendimentoModal';
import { Button } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

//Configurar TOPTAB EM ATENDIMENTO || FINALIZADO || TODOS
const TabsConfig = {
  ml: -20,

  '@media (min-width: 320px) ': {
    width: '300%',
    ml: -53,
    mt: -6,
  },
  '@media (min-width: 375px) ': {
    width: '300%',
    ml: -53,
    mt: -6,
  },
  '@media (min-width: 768px) ': {
    ml: -43,
  },
  '@media (min-width: 1024px) ': {
    ml: -4,
  },
  '@media (min-width: 1280px) ': {
    ml: -20,
  },
  '@media (min-width: 1440px) ': {
    ml: 40,
  },
  '@media (min-width: 1920px) ': {
    ml: 5,
  },
  '@media (min-width: 2560px) ': {
    ml: 36,
  },

}

//Alinhar as TABS
const BoxConfig = {
  mt: 10,
  mb: 10,
  mr: 'auto',

  '@media (min-width: 320px) ': {
    ml: 0,
    width: '100%',
  },
  '@media (min-width: 425px) ': {
    ml: 0,
    width: '100%',
  },
  '@media (min-width: 599px) ': {
    ml: 0,
    width: '100%',
  },
  '@media (min-width: 992px) ': {
    ml: 8,
  },
  '@media (min-width: 1024px) ': {
    ml: 0,
  },
  '@media (min-width: 1920px) ': {
    ml: 30,
    width: '55%',
  },
  '@media (min-width: 2560px) ': {
    ml: 45,
  },
  
}

// Button Adicionar Atendimento
const ButtonConfig = {
  ml: -2,
  mt: 2,
  zIndex: 1,

  '@media (min-width: 320px) ': {
    ml: 0,
  },
  '@media (min-width: 599px) ': {
    ml: 0,
  },

}


// Button Em Atendimento
const Tab1Config = {
  ml: 55,

  '@media (min-width: 320px) ': {
    ml: 52,
  },

}

//Finalizados
const Tab2Config = {
 
  '@media (min-width: 320px) ': {
    visibility: 'hidden'
  },
  '@media (min-width: 599px) ': {
    visibility: 'visible'
  },
}

//Todos
const Tab3Config = {
 
  '@media (min-width: 320px) ': {
    ml: -16,
  },
  '@media (min-width: 375px) ': {
    ml: -14,
  },
  '@media (min-width: 425px) ': {
    ml: -12,
  },
  '@media (min-width: 768px) ': {
    ml: 0,
  },
}




export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={BoxConfig}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} sx={TabsConfig}>
          <Tab label="Em atendimento" {...a11yProps(0)} sx={Tab1Config} />
          <Tab label="Finalizado" {...a11yProps(1)} sx={Tab2Config} />
          <Tab label="Todos" {...a11yProps(2)} sx={Tab3Config} />
        </Tabs>
      </Box>
      {/*Tabs 1*/}
      <TabPanel value={value} index={0}>
      <Box>
      <ServiceBar />
      <Dummybar />
      </Box>
      <Button sx={ButtonConfig}><AtendimentoModal /> </Button>
      </TabPanel>
      {/*Tabs 2*/}
      <TabPanel value={value} index={1}>
        <Box sx={{
          mt: 1,
        }}>
        </Box>
        
        <Box sx={{
          mt: 1,
        }}>
        </Box>
      </TabPanel>
      {/*Tabs 3*/}
      <TabPanel value={value} index={2}>
        <Box sx={{
            mt: 1,
        }}>
          <Box sx={{
          mt: 1
        }}>
        <ServiceBar />
        </Box>
        <Dummybar />
        </Box>

        <Box sx={{
          mt: 1
        }}>
        <Dummybar2 />
        
        </Box>

        <Box sx={{
          mt: 1
        }}>
        <Dummybar3 />
        </Box>

        <Box sx={{
          mt: 1
        }}>
        <Dummybar4 />
        </Box>

      </TabPanel>
    </Box>
  );
}