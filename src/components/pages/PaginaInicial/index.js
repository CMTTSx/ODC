import React, { useState } from 'react';

import Modal from '../Modal/AtendimentoModal';

//Importando Components
import Header from '../../layouts/Header';
import Aside from '../../layouts/Aside';

//Importando Icons
import menuHamburguer from '../../../assets/3hamburguer.png'

export default function PaginaInicial() {

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div>
      <Header />
      <Aside />

      <div className=' ml-[35em] mt-[-58em] border-1 w-[70em] h-[10em] shadow-xl '>

        <div className=' ml-[45em] mt-[0em] w-[10em] '>

          <div className=' text-center font-bold text-[32px] '>
            <h2 className=' text-tipo-procedimento mt-2 '>34</h2>
          </div>
          <div className='font-bold text-center ml-[5px] mt-[-10px]  '>
            <h2>Atendidos</h2>
          </div>

          <div className=' ml-[6.8em] mt-[-60px] text-center font-bold text-[32px]'>
            <h2 className=' text-desmarcou mt-[-8px] '>2</h2>
          </div>
          <div className=' ml-[11.8em] mt-[-0.8px] font-bold text-center mt-[-11px]'>
            <h2>Cancelado</h2>
          </div>

          <div className=' ml-[10.3em] mt-[-58px] text-center font-bold text-[32px] '>
            <h2 className=' text-faltou '>2</h2>
          </div>
          <div className=' ml-[20.1em] font-bold text-center mt-[-12px]'>
            <h2>Falta</h2>
          </div>

        </div>

      </div>

      <div className=' ml-[35.4em] mt-[10em] w-[69em] h-[4.6em] shadow-2xl '>
        <div className=' bg-indicador-azul h-[74px] w-2 cursor-pointer '>
        </div>

        <div className=' ml-[2em] mt-[-2.4em] text-2xl font-bold ' title='Nome do paciente(a)'>
          <h2> MAYARA SILVA SOUZA |</h2>
        </div>
        <div className=' ml-[14em] mt-[-1.3em] text-2xl font-bold ' title='Nome do paciente(a)'>
          <h2>26 Anos e 7 Meses</h2>
        </div>
        <div className=' ml-[3em] mt-[-0.2em] text-1xl font-bold' title='Horário de atendimento'>
          <h2>10:00hrs |</h2>
        </div>
        <div className=' ml-[8em] mt-[-1.5em] text-1xl font-bold text-indigo-600' title='Status de Atendimento'>
          <h2>Em Atendimento</h2>
        </div>

        <div className=' ml-[45em] mt-[-2.8em] text-1xl font-bold w-[9em] rounded-xl bg-tipo-procedimento p-0.5 ' title='Tipo de Atendimento'>
          <h2>PROCEDIMENTOS</h2>
        </div>

        <img src={menuHamburguer} alt="menuHamburguer" className=' w-[50px] ml-[65em] mt-[-1.8em] cursor-pointer ' />

      </div>



      <div>

        <div className="flex justify-center">
          <div className="flex cursor-pointer justify-center w-[20em] mt-20 ml-[15em]  bg-blue-400 p-4  m-6 rounded-md text-white hover:bg-[blue]"
            onClick={clicked}
          >
            <h2 className='font-bold'> Adicionar Atendimento </h2>
          </div>
        </div>

        {/* conditionally display the result of the action if user confirms  */}
        {choice &&
          <div className="flex justify-center">
            <div className="flex justify-center w-20 bg-red-400 mt-5 p-6 text-lg text-white ">
              <button className=' ml-[64em] mt-10 border-2 w-[11em] p-2 cursor-pointer hover:bg-black hover:text-white' onClick={Modal}>

              </button></div>
          </div>
        }


        {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

      </div>

    </div>
  );
}
