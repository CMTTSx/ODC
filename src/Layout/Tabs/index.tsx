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

//Alinhar as TABS
const BoxConfig = {
  width: '50em',
  ml: -10,
  mr: 'auto',

  '@media (min-width: 320px) and (max-width: 375px)': {
    width: '15em',
    ml: 40,
    mt: -165,
  },
  '@media (min-width: 375px) and (max-width: 383px)': {
    width: '15em',
    ml: 39.5,
    mt: -165,
  },
  '@media (min-width: 384px) and (max-width: 389px)': {
    width: '15em',
    ml: 84,
    mt: -160,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    width: '19em',
    ml: 81,
    mt: -140,
  },
  '@media (min-width: 425px) and (max-width: 599px)': {
    width: '20em',
    ml: 81,
    mt: -135,
  },
  '@media (min-width: 600px) and (max-width: 767px)': {
    width: '20em',
    ml: 93,
    mt: -135,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    width: '40em',
    ml: 84,
    mt: -130,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    width: '50em',
    ml: -2,
    mt: 2,
  },
  '@media (min-width: 1025px) and (max-width: 1280px)': {
    ml: -13,
  },
  '@media (min-width: 1281px) and (max-width: 1440px)': {
    ml: -3,
  },
  '@media (min-width: 2560px)': {
    width: '50em',
    ml: -30,
    mt: 20,
  },
  '@media (min-width: 3840px)': {
    width: '50em',
    ml: 25,
    mt: 20,
  },
}


const ButtonConfig = {
  ml: 30,
  mt: 2,
  zIndex: 1,

  '@media (min-width: 320px) and (max-width: 389px)': {
    mt: 5,
    ml: 0,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    width: '15em',
    ml: 4,
    mt: 15,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    mt: 5,
    ml: 3.5,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    mt: 10,
    ml: 20,
  },
  '@media (min-width: 1023px) and (max-width: 1024px)': {
    mt: 10,
  },

}

//Configurar TOPTAB
const TabsConfig = {
  '@media (min-width: 320px) and (max-width: 374px)': {
    ml: 3,
    mt: 20,
  },
  '@media (min-width: 375px) and (max-width: 389px)': {
    ml: 3,
    mt: 25,
  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    ml: 3.5,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    mt: -5,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    width: 1,
    ml: 25,
  },
  '@media (min-width: 3840px)': {
    width: 1,
    ml: 25,
  },

}
// Em Atendimento
const Tab1Config = {
  ml: 55,

  '@media (min-width: 320px) and (max-width: 389px)': {
    ml: -5,

  },
  '@media (min-width: 390px) and (max-width: 424px)': {
    ml: 0,
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    ml: 5,
  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
    ml: 5,
  },

}

//Finalizados
const Tab2Config = {

  '@media (min-width: 320px) and (max-width: 374px)': {
   display: 'none',
  },
  '@media (min-width: 375px) and (max-width: 424px)': {
    display: 'none',
  },
  '@media (min-width: 425px) and (max-width: 767px)': {
    display: 'none',

  },
  '@media (min-width: 768px) and (max-width: 1023px)': {
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
          <Tab label="Todos" {...a11yProps(2)}/>
        </Tabs>
      </Box>
      {/*Tabs 1*/}
      <TabPanel value={value} index={0}>
      <Box>
      <ServiceBar />
      <Dummybar3 />
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


        <Box sx={{
          mt: 1
        }}>
        <ServiceBar />
        </Box>



      </TabPanel>
    </Box>
  );
}