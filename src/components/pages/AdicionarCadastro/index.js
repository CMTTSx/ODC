import React from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

export default function AdicionarCadastro() {
    return (
        <div>

            <Header />
            <Aside />

            <h1 className=' ml-[25em] mt-[-20em] mb-[50px] text-4xl font-bold  '>CADASTRO PESSOAL</h1>

            <div className='  ml-[35em] mt-[1em]  w-[45%] rounded-md '>

                <label className='ml-20'>Nome:</label>
                <input place type="text" className=' ml-[80px] mt-[-20px]  w-full border-2 border-y-linha border-t-transparent  border-l-transparent border-r-transparent outline-none ' />

                <label className='ml-20'>CPF:</label>
                <input type="text" className=' ml-[80px] mt-[-20px] w-full border-2 border-y-linha border-t-transparent  border-l-transparent border-r-transparent outline-none ' />

                <label className='ml-20'>Telefone:</label>
                <input type="text" className=' ml-[80px] mt-[-20px]  w-full border-2 border-y-linha border-t-transparent  border-l-transparent border-r-transparent outline-none ' />


                <h1 className=' ml-[9em] mt-[2.2em] mb-[20px] text-4xl font-bold  '>CADASTRO TERRITORIAL</h1>

                <label className='ml-20'>CEP:</label>
                <input type="text" className=' ml-[80px] mt-[-20px]  w-full border-2 border-y-linha border-t-transparent  border-l-transparent border-r-transparent outline-none ' />

                <label className='ml-20'>Rua:</label>
                <input type="text" className=' ml-[80px] mt-[-20px]  w-full border-2 border-y-linha border-t-transparent  border-l-transparent border-r-transparent outline-none ' />

                <label className='ml-20'>Bairro:</label>
                <input type="text" className=' ml-[80px] mt-[-20px]  w-full border-2 border-y-linha border-t-transparent  border-l-transparent border-r-transparent outline-none ' />

                <label className='ml-20'>Cidade:</label>
                <input type="text" className=' ml-[80px] mt-[-20px]  w-full border-2 border-y-linha border-t-transparent  border-l-transparent border-r-transparent outline-none ' />

                <label className='ml-20'>Estado:</label>
                <input type="text" className=' ml-[80px] mt-[-20px]  w-full border-2 border-y-linha border-t-transparent  border-l-transparent border-r-transparent outline-none ' />


            </div>

            <button className='ml-[61em] mt-[3em] w-20 border-2 p-1 hover:bg-cancelar hover:text-white font-semibold'>Cancelar</button>
            <button className='border-2 ml-5 w-20 p-1 hover:bg-salvar hover:text-white font-semibold'>Salvar</button>



        </div>
    );
}