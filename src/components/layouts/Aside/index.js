import React from 'react';

import { Link } from 'react-router-dom';

//import Icons
import DashboardIcon from '../../../assets/DashboardIcon.png';
import AgendaIcon from '../../../assets/agenda-icon1.png';
import ClientesIcon from '../../../assets/clientes-icon1.png';
import FinanceiroIcon from '../../../assets/icon-financeiro1.png';
import EstoqueIcon from '../../../assets/estoque-icon-1.png';
import UsuarioIcon from '../../../assets/gerenciamento_users1.png';
import SuporteIcon from '../../../assets/suporteicon-1.png';


export default function Aside() {


 return (
   <div className=' w-[22em] h-[50em] bg-[#F1F4FE] border-2  text-center '>
       
     <Link to="/">
        <button
          className=' w-full bg-[#f3f6f4] p-3 mt-5 mb-5 hover:bg-hover-color active:bg-active-color shadow-xl rounded-lg'>
          <img className=' mt-2 w-10 ' src={DashboardIcon} alt="DashboardIcon" />
          <h2 className='mt-[-20px] font-bold ' >Dashboard</h2>
          </button>
     </Link>

      <Link to="/agendamento">
          <button
          className=' w-full bg-[#f3f6f4] p-3 mt-5 mb-5 hover:bg-hover-color active:bg-active-color shadow-xl rounded-lg'>
          <img className=' mt-2 w-10 ' src={AgendaIcon} alt="AgendaIcon" />
          <h2 className='mt-[-24px] font-bold ' >Agenda</h2>
          </button>
      </Link>

     <Link to='/clientes'>
     <button
      className=' w-full bg-[#f3f6f4] p-3 mt-5 mb-5 hover:bg-hover-color active:bg-active-color shadow-xl rounded-lg'>
      <img className=' mt-0 w-8 ' src={ClientesIcon} alt="ClientesIcon" />
      <h2 className='mt-[-25px] font-bold ' >Clientes</h2>
      </button>
     </Link>

      <Link to='/financeiro'>
      <button
      className=' w-full bg-[#f3f6f4] p-3 mt-5 mb-5 hover:bg-hover-color active:bg-active-color shadow-xl rounded-lg'>
      <img className=' mt-[-5px] w-10 ' src={FinanceiroIcon} alt="FinanceiroIcon" />
      <h2 className='mt-[-35px] font-bold ' >Financeiro</h2>
      </button>
      </Link>

     <Link to='/estoque'>
     <button
      className=' w-full bg-[#f3f6f4] p-3 mt-5 mb-5 hover:bg-hover-color active:bg-active-color shadow-xl rounded-lg'>
      <img className=' mt-[-1] w-8' src={EstoqueIcon} alt="EstoqueIcon" />
      <h2 className='mt-[-30px] font-bold ' >Estoque</h2>
      </button>
     </Link>

     <Link to='/gerenciamento-de-usuarios'>
     <button
      className=' w-full bg-[#f3f6f4] p-3 mt-5 mb-5 hover:bg-hover-color active:bg-active-color shadow-xl rounded-lg'>
      <img className=' mt-[-1] w-8 ' src={UsuarioIcon} alt="UsuarioIcon" />
      <h2 className='mt-[-20px] font-bold ' >Gerenciamento de Usuarios</h2>
      </button>
     </Link>

     <Link to='/suporte'>
     <button
      className=' w-full bg-[#f3f6f4] p-3 mt-5 mb-5 hover:bg-hover-color active:bg-active-color shadow-xl rounded-lg'>
      <img className=' mt-2 w-10 ' src={SuporteIcon} alt="SuporteIcon" />
      <h2 className='mt-[-20px] font-bold '>Suporte</h2>
      </button>
     </Link>

      

   </div>
 );
}