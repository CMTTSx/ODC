import React, { useState } from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

//Importando Components
import DadosGerais from "../Tabs/DadosGerais";
import Destinatario from "../Tabs/Destinatario";
//import Pagamentos from "../Tabs/Pagamentos";
//import Produtos from "../Tabs/Produtos";
//import Tabs from '../Tabs/index';

export default function NotaFiscal() {


    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };

    const handleTab2 = () => {
        setActiveTab("tab2");
    };


    return (
        <div className='bg-fundo'>
            <Header />
            <Aside />

            <div className=' ml-[30em] mt-[-53em] bg-fundo h-[53em]  '>

                <div className=' w-[20em] h-[30em] shadow-2xl '>
                    <h2 className=' font-bold text-2xl text-center pt-3 '>Emitir Nota Fiscal</h2>
                    <div onClick={handleTab1} >
                        <h3 className='text-left ml-5 mt-5 font-normal hover:font-semibold hover:border-4 p-2 cursor-pointer hover:bg-bg-nfs '>Dados Gerais</h3>
                    </div>
                    <div onClick={handleTab2} >
                        <h3 className='text-left ml-5 mt-1 font-normal hover:font-semibold hover:border-4 p-2 cursor-pointer hover:bg-bg-nfs '>Destinatário</h3>
                    </div>
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

                    <div className="Tabs ">
                        <ul className="nav border-2 flex flex-row cursor-pointer">
                            <li
                                className={activeTab === "tab1" ? "active" : ""}
                            >
                            </li>
                            <li
                                className={activeTab === "tab2" ? "active" : ""}
                            >

                            </li>
                        </ul>
                        <div className="outlet">
                            {activeTab === "tab1" ? <DadosGerais /> : <Destinatario />}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}