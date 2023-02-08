import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as LinkRouter } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { ImHome } from 'react-icons/im';
import { Box } from '@mui/system';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BreadCrumbs = {
  mt: 0.5,
  mb: 1.5,
  ml: 15,

  '@media (min-width: 320px) and (max-width: 1024px)': {
    mt: 0,
    ml: 'auto',
    mr: 'auto',
    pr: 1,
    border: 1,
    color: '#e8e8e8'
  }

}

export default function BreadcrumbsRef() {
  return (
    <Box role="presentation" onClick={handleClick} sx={BreadCrumbs}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/paginaInicial"
        >
          
          <LinkRouter to='/paginaInicial'><Box sx={{mt: 0.5}}>< ImHome size={18} /></Box></LinkRouter>          <IoIosArrowForward   />

          <Typography sx={{
            ml: 2,
            mt: 0.3,
          }}>Agenda</Typography>
          
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
