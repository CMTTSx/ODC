import React from 'react';

import Header from '../../layouts/Header';
import Aside from '../../layouts/Aside';

import adicionarCadastroIcon from '../../../assets/novo-adicionar.png'
import verCadastroIcon from '../../../assets/editarCadastro.png'
import { Link } from 'react-router-dom';

export default function Clientes() {
  return (
    <div>
      <Header />
      <Aside />
      <main className=' ml-[22em] mt-[-60em] w-full ' >
        <h1 className=' ml-[15em] mt-10 mr-[auto] font-bold  text-[3em] '>CLIENTES</h1>

        <div className='flex flex-1 justify-center mr-[20em] p-[10em]  ' >

          <Link to='/adicionar-cadastro' >
            <div className=' border-[1px] w-[450px] text-center mr-[10em] hover:scale-125 cursor-pointer ' >
              <img src={adicionarCadastroIcon} alt="adicionarcadastroicon" className=' ml-[10em] ' />
              <h2 className=' text-[1.5em] ' >Adicionar Cadastro</h2>
            </div>
          </Link>

          <div className=' border-[1px] w-[450px] text-center mr-[5em] hover:scale-125 cursor-pointer ' >
            <img src={verCadastroIcon} alt="adicionarcadastroicon" className=' ml-[10em] ' />
            <h2 className=' text-[1.5em] ' >Ver Cadastro</h2>
          </div>

        </div>

      </main>

    </div>
  );
}