import React, { useState } from 'react';


//Importando Components
import Header from '../../layouts/Header';
import Aside from '../../layouts/Aside';

import Modal from '../Modal/AgendaModal';

//Importando Icons
import menuHamburguer from '../../../assets/3hamburguer.png'


export default function Agendamento() {

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }


  return (
    <div>
      <Header />
      <Aside />

      <div className=' ml-[19em] mt-[-28em] text-3xl font-bold '>
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



      <div>

        <div className="flex justify-center">
          <div className="flex cursor-pointer justify-center w-[20em] mt-20 ml-[20em]  bg-blue-400 p-4  m-6 rounded-md text-white hover:bg-[blue]"

            onClick={clicked}
          >
            <button className=' text-center font-semibold '>Agendar horário</button>
          </div>
        </div>

        {/* conditionally display the result of the action if user confirms  */}
        {choice &&
          <div className="flex justify-center">
            <div className="flex  justify-center w-20 bg-red-400 mt-5 p-6 text-lg text-white "> 
              <button className=' ml-[64em] mt-10 border-2 w-[11em] p-2 cursor-pointer hover:bg-black hover:text-white' onClick={Modal}>
                
              </button></div>
          </div>
        }


        {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

      </div>

    </div>
  );
}