import React from 'react';


//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'
//import Modal from '../Modal'

//Importando Icons
import menuHamburguer from '../../../assets/3hamburguer.png'


export default function Agendamento() {
 return (
   <div>
      <Header />
      <Aside />
      
      <div className=' ml-[19em] mt-[-23em] text-3xl font-bold '>
        <h1>25 de Maio de 2022</h1>
      </div>

      <div className=' ml-[34em] text-3xl font-bold '>
        <h2>Agendamento</h2>
      </div>

      <div className=' mt-10 ml-[35em] border-2 w-[60%] '>
        
        <div className=' '>
          <h2 className='font-bold text-2xl mt-3 ml-2'>10:00hrs</h2>
          <h2 className='text-blue-600 font-bold ml-4 '>Agendado</h2>
          <h1 className='  mt-[-1.8em] ml-[6em] mb-5 text-2xl font-bold'>Julia Silva Machado</h1>
        </div>
      </div>





      <img src={menuHamburguer} alt="menuHamburguer" className=' w-[50px] ml-[102em] mt-[-3.5em] cursor-pointer ' />

      <button className=' ml-[64em] mt-10 border-2 w-[10em] p-2 cursor-pointer hover:bg-black hover:text-white'>
       <h2 className=' text-center font-semibold '>Agendar horário</h2>
      </button>

      

   </div>
 );
}