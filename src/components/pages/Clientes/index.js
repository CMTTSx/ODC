import React from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

//Importando Icons
import adicionarCadastro from '../../../assets/novo-adicionar.png'
import editarCadastro from '../../../assets/editarCadastro.png'
import { Link } from 'react-router-dom';

export default function Clientes() {
 return (
   <div>
       <Header />
       <Aside />
       <h1 className=' ml-[22em] mt-[-15em] text-5xl font-bold '>Clientes</h1>
       
        <div className=' flex flex-row '>
          
        <Link to='/adicionar-cadastro'>
        <div className=' ml-[30em] mt-[5em] border-2 w-[15em] text-center text-xl hover:scale-150 cursor-pointer rounded-md '>
         <img src={adicionarCadastro} alt="adicionar-cadastro-icon" className=' ml-[100px] ' />
         Adicionar Cadastro
       </div>

        </Link>

       <div className=' ml-[5em] mt-[5em] border-2 w-[15em] text-center text-xl hover:scale-150 cursor-pointer rounded-md '>
         <img src={editarCadastro} alt="editarCadastroIcon" className=' ml-[100px] ' />
         Ver Cadastros
       </div>

       

        </div>
      
   </div>
 );
}