import React from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

export default function Suporte() {
 return (
   <div>
     <Header />
     <Aside />
       
    <div className=' ml-[10em] mt-[-15em] font-bold text-5xl text-[#8b8c8b] '>
      <h2  className='ml-[5.5em]'>Bem Vindo ao Centro de Suporte</h2>
      <h4 className=' text-lg text-black mt-5 mr-[5em]  '>Para otimizar solicitações de suporte e atendê-lo melhor, utilizamos um sistema de tíquetes de suporte. A acada solicitação é atribuído um número de ticket exclusivo que você pode usar para rastrear o progesso e as respostas online. Para sua referência, forneceremos arquivos completos e histórico de todas as suas solicitações de suporte. É necessário um endereço de email válido para enviar um ticket. </h4>
    </div>

    <div className=' bg-[#007ba4] ml-[30em] mt-10 bg-sky-500 w-[40em] p-6 cursor-pointer hover:bg-[#006ae3] '>
      <h2 className=' text-center text-white '>Abrir Novo Ticket</h2>
    </div>

    <div className='bg-[#009cd0] text-white w-[40em] ml-[30em] text-center cursor-pointer '> 
    Por gentileza, detalhe o máximo possível para que possamos atende-lo melhor. Para consultar um ticket feito anteriormente, faça o login.
    </div>

    <div className=' bg-green-500 ml-[72em] mt-[-7.4em] bg-sky-500 w-[40em] p-6  cursor-pointer hover:bg-[#00e339]'>
      <h2 className=' text-center text-white  cursor-pointer'>Verificar Status do Ticket</h2>
    </div>

    <div className='bg-green-400 text-white w-[40em] ml-[72em] p-3 text-center cursor-pointer'> 
    Clique para verificar o status de seus Tickets!
    </div>

   </div>
 );
}