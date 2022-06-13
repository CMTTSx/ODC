import React from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

export default function NotaFiscal() {
 return (
   <div className='bg-fundo'>
       <Header />
       <Aside />
       
       <div className=' ml-[30em] mt-[-45em] bg-fundo h-[50em]  '>
           
           <div className=' w-[20em] h-[30em] shadow-2xl '>
              <h2 className=' font-bold text-2xl text-center pt-3 '>Emitir Nota Fiscal</h2> 
              <h3 className='text-left ml-5 mt-5 font-normal hover:font-semibold hover:border-4 p-2 cursor-pointer hover:bg-bg-nfs '>Dados Gerais</h3>
              <h3 className='text-left ml-5 mt-1 font-normal hover:font-semibold hover:border-4 p-2 cursor-pointer hover:bg-bg-nfs '>Destinatário</h3>
              <h3 className='text-left ml-5 mt-1 font-normal hover:font-semibold hover:border-4 p-2 cursor-pointer hover:bg-bg-nfs '>Produtos</h3>
              <h3 className='text-left ml-5 mt-1 font-normal hover:font-semibold hover:border-4 p-2 cursor-pointer hover:bg-bg-nfs '>Pagamentos</h3>

              <button className=' ml-[2.5em] mr-[auto] mt-5 border-2 p-1 w-[15em] h-10 hover:font-bold hover:text-white hover:bg-black  '>
                  Ver DANFE
              </button>

              <button className=' ml-[2.5em] mr-[auto] mt-5 border-2 p-1 w-[15em] h-10 hover:font-bold hover:text-white hover:bg-black  '>
                  Excluir Nota
              </button>

              <button className=' ml-[2.4em] mr-[auto] mt-10 border-2 p-1 w-[15em] h-10 hover:font-bold hover:text-white bg-emitir-nota hover:bg-salvar  '>
                  Emitir Nota
              </button>
              
           </div>

           <div className=' ml-[22em] mt-[-30em] w-[65em] h-[45em] bg-fundo shadow-2xl '>
                

           </div>

       </div>

   </div>
 );
}