import React, { useState } from 'react';

//Importando Components
import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'

import { FiSearch } from 'react-icons/fi';

// Importando Api
import api from '../../../services/api';

export default function AdicionarCadastro() {

    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

    const valorInicial = useState('');

    async function handleSearch() {

        if (input === '') {
            alert('Preencha algum CEP!')
            return;
        }

        try {

            const response = await api.get(`${input}/json`);
            setCep(response.data);
            setInput("");

        } catch {

            alert('Aconteceu algum erro, tente novamente com um CEP correto!')
            setInput("")
        }

    }

    return (
        <div>

            <Header />
            <Aside />

            <main className=' border-[1px] border-[red] ' >

                <h1 className=' ml-[26em] mt-[-25em] mb-[50px] text-4xl font-bold  '>CADASTRO PESSOAL</h1>

                <div className='  ml-[40em] mt-[1em]  w-[45%] rounded-md '>

                    <form>
                        <div>
                            <label class="text-white dark:text-gray-800" for="username">Nome Completo</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-black-300 bg-white border border-gray-300 rounded-md dark:text-black-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div className="relative z-0 w-full mb-6 mt-5 group border-b-[2px] border-black ">
                            <div>
                                <label className=' dark:text-gray-600 text-[15px] ' >Data de Nascimento:</label>
                                <input type="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" className=' ml-2 ' />
                            </div>
                        </div><label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Gênero</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option defaultValue={valorInicial}></option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>

                    </form>

                    <h1 className=' ml-[8em] mt-[2.2em] mb-[20px] text-4xl font-bold  '>CADASTRO TERRITORIAL</h1>

                    <form>
                        <div className="relative z-0 w-full mb-6 group">

                            <div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input
                                        type="text"
                                        placeholder=" "
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CEP </label>
                                </div>

                                <button className="cursor-pointer " onClick={handleSearch} >
                                    <FiSearch size="25" color={'blue'} className='mt-[-5em] ml-[54em] ' />
                                </button>

                            </div>
                        </div>


                        <div>

                            <div>
                                <label class="text-white dark:text-gray-600" for="username">Logradouro</label>
                                <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:4 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                
                            </div>
                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                <div>
                                    <label class="text-white dark:text-gray-600" for="username">Bairro</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:4 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-white dark:text-gray-600" for="username">Complemento</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:4 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                            </div>
                            <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div>
                            <label class="text-white dark:text-gray-600" for="username">Nº</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:4 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label class="text-white dark:text-gray-600" for="username">Cidade</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:4 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                            </div>

                        </div>



                    </form>
                </div>

                <div className=' mr-[1em] ' >
                    <button className='ml-[61em] mt-[3em] w-20 border-2 p-1 hover:bg-cancelar hover:text-white font-semibold'>Cancelar</button>
                    <button className='border-2 ml-5 w-20 p-1 hover:bg-salvar hover:text-white font-semibold'>Salvar</button>
                </div>



            </main>



        </div>
    );
}