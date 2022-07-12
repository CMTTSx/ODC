import React from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

//Importando Icons
import ControleFinanceiro from '../../../assets/controle-financeiro.png'
import NotaFiscal from '../../../assets/nota-fiscal.png'
import Boleto from '../../../assets/Boleto.webp'
import { Link } from 'react-router-dom';

export default function Financeiro() {
  return (
    <div>
      <Header />
      <Aside />
      <h1 className=' ml-[22em] mt-[-18em] text-5xl font-bold '>Financeiro</h1>

      <div className=' flex flex-row '>

       
          <div className=' ml-[30em] mt-[5em] border-2 w-[15em] text-center text-xl hover:scale-150 cursor-pointer rounded-md '>
          <Link to='/controle-financeiro'>
            <img src={ControleFinanceiro} alt='' className=' ml-[5em] ' />
            <h4>Controle Financeiro</h4>
          </Link>
          </div>
       

        
          <div className=' ml-[5em] mt-[5em] border-2 w-[15em] text-center text-xl hover:scale-150 cursor-pointer rounded-md '>
          <Link to='/nota-fiscal'>
            <img src={NotaFiscal} alt='' className=' w-20 ml-[5em] mt-[0.7em] ' />
            <h4>Nota Fiscal Eletrônica</h4>
          </Link>
          </div>
        

        
          <div className=' ml-[5em] mt-[5em] border-2 w-[15em] text-center text-xl hover:scale-150 cursor-pointer rounded-md '>
          <Link to='/emissao-boleto'>
            <img src={Boleto} alt='' className=' w-20 ml-[5.5em] mt-[0.8em] ' />
            <h4>Emissão de Boleto</h4>
          </Link>
          </div>
       

      </div>

    </div>
  );
}