import React from 'react';

//Importando Components
import Header from '../../layouts/Header';
import Aside from '../../layouts/Aside';

//Importando Icons
import recebimentoIcon from '../../../assets/recebimento.png'
import pagamentoIcon from '../../../assets/pagamento.png'
import transferenciaIcon from '../../../assets/transferencia.png'
import reciboIcon from '../../../assets/recibo.png'
import renegociacaoIcon from '../../../assets/renegociacao.png'

//Importando Pages

export default function ControleFinanceiro() {

 

    return (
      <>
        <Header />
        <Aside />
        <main className=' ml-[22em] mt-[-40em] ' >
          <h1 className=' ml-[11em] mt-[-18em] text-5xl font-bold '>
            CONTROLE FINANCEIRO</h1>

          <div className=' flex flex-row flex-shrink mt-[5em] w-full h-full cursor-pointer ' >

            <div className=' border-[1px] w-[250px] ml-[4em] px-8 text-[2em] font-bold bg-[lightgreen] hover:bg-[green] ' >
              <img src={recebimentoIcon} alt="recebimentoIcon" width='40px' className=' ml-[2em] mt-[0.6em] ' />
              Recebimento</div>

            <div className=' border-[1px] w-[250px] px-11 py-[-3px] text-[2em] font-bold bg-[red] hover:bg-[brown] ' >
              <img src={pagamentoIcon} alt="pagamentoIcon" width='55px' className=' ml-[1.6em] mt-[0.2em] ' />
              Pagamento</div>

            <div className=' border-[1px] w-[250px] px-6 text-[2em] font-bold bg-[orange] hover:bg-[#E09F3E] ' >
              <img src={transferenciaIcon} alt="transferenciaIcon" width='55px' className=' ml-[2em] mt-[0.2em] ' />
              Transferência</div>

            <div className=' border-[1px] w-[250px] px-[2em] text-[2em] font-bold bg-[#C2F970] hover:bg-[#8ED081] ' >
              <img src={reciboIcon} alt="reciboIcon" width='55px' className=' ml-[1em] mt-[0.2em] ' />
              Recibos</div>

            <div className=' border-[1px] w-[250px] px-[22px] text-[2em] font-bold bg-[white] hover:bg-[lightgray] ' >
              <img src={renegociacaoIcon} alt="renegociacaoIcon" width='60px' className=' ml-[2em] mt-[0.2em] ' />
              Renegociação</div>


            <div>

            </div>

          </div>




        </main>
      </>
    );
  }
