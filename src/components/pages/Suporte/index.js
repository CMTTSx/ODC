import React, { useState } from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

import Modal from '../../../components/pages/Modal/SuporteModal';

export default function Suporte() {

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div>
      <Header />
      <Aside />

      <div className=' ml-[10em] mt-[-18em] font-bold text-5xl text-[#8b8c8b] '>
        <h2 className='ml-[5.5em]'>Bem Vindo ao Centro de Suporte</h2>
        <h4 className=' text-lg text-black mt-5 mr-[5em]  '>Para otimizar solicitações de suporte e atendê-lo melhor, utilizamos um sistema de tíquetes de suporte. A acada solicitação é atribuído um número de ticket exclusivo que você pode usar para rastrear o progesso e as respostas online. Para sua referência, forneceremos arquivos completos e histórico de todas as suas solicitações de suporte. É necessário um endereço de email válido para enviar um ticket. </h4>
      </div>



      <div>

        <div className="flex justify-center">
          <div className="flex cursor-pointer justify-center w-[40em] mt-[5em] mr-[21.5em]  bg-blue-400 p-4 py-5  m-6 text-white hover:bg-[blue]"

            onClick={clicked}
          >
            <button className=' text-center font-semibold '>Abrir Novo Ticket</button>
          </div>
        </div>

        {/* conditionally display the result of the action if user confirms  */}
        {choice &&
          <div className="flex justify-center">
            <div className="flex  justify-center w-20 bg-red-400 mt-5 p-6 text-lg text-white ">
              <div className=' bg-[#007ba4] ml-[30em] mt-10 bg-sky-500 w-[40em] p-6 cursor-pointer hover:bg-[#006ae3] '>


              </div>
            </div>
          </div>
        }


        {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

      </div>

      <div className='bg-[#009cd0] text-white w-[40em] ml-[30em] mt-[-1.5em] text-center cursor-pointer '>
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
