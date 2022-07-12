import React from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

//Importando Icons
import menuHamburguer from '../../../assets/3hamburguer.png'


export default function Usuario() {
 return (
   <div>
       <Header />
       <Aside />
       
        <div className=' ml-[17.5em] mt-[-17em] text-5xl font-bold '>
          <h1>Gerenciamento de Usuários</h1>

          <div className=' border mt-[2em] ml-[-7em] w-[25em] p-5 '>
            <h2 className=' font-semibold text-lg ml-[0.4em] mt-[-0.2em] '>Administrador(a)</h2>
            <h3 className=' font-normal text-lg ml-[0.6em] mt-[-0.2em] '> Fabíola T. Reis </h3>
            <img src={menuHamburguer} alt="menuHamburguer" className=' w-[40px] h-[25px] ml-[23em] mt-[-0.8em] cursor-pointer ' />
          </div>

        </div>  

   </div>
 );
}