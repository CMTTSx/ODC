import React from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

//Importando Icons

export default function EmissaoBoleto() {
  return (
    <div className='bg-fundo h-[56em]'>
      <Header />
      <Aside />

      <h1 className=' bg-fundo h-[15em] font-bold text-center text-6xl ml-[5.8em] mt-[-15em] '>Emissão de Boleto</h1>

      <div className=' ml-[25em] mr-[auto ] mt-[-45em] border-1 w-[75%] h-[30em] bg-white shadow-2xl '>
      </div>




    </div>
  );
}