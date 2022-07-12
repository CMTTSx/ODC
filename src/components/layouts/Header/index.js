import React from 'react';

import { Link } from 'react-router-dom';

//Importando Icons
import Logo from '../../../assets/ODCSYSTEM.png'
import userIcon from '../../../assets/profile-user-icon1.png'

export default function Header() {
 return (
   <div class="flex bg-odonto-blue text-white p-0 w-full">
       <Link to="/">
       <img src={Logo} alt="Logo" className='  w-[22em] h-[6em] cursor-pointer ' />
       </Link>
       <img src={userIcon} alt='' className='  w-[60px] h-[30px] mt-[2.2%] ml-[90em] ' />
       <h3 className=' mt-[2em]  ml-[-10%] '>FABÍOLA T. REIS</h3>
       <h2 className=' mt-[3.2em] ml-[-7em] font-bold '>RECEPCIONISTA</h2>
       
       
   </div>
 );
}