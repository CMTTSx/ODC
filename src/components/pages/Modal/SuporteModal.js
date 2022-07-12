
function Modal({ setModalOn, setChoice }) {

  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (

    <div className="   bg-zinc fixed inset-0 z-50 mt-[0em]   ">

      <div className="flex h-screen justify-center items-center ">

        <div className="flex-col justify-center w-[40em]  bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">

          <div className="flex  text-lg  text-zinc-600   mb-10">
            <div class="mb-4 ">
              <label class="block text-gray-700 text-sm text-center font-bold mb-10 mt-2 text-[1.8em] ">
                Suporte
              </label>
              <input class="shadow appearance-none border rounded w-[24em] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Digite seu Nome"></input>
              <input class="shadow appearance-none border rounded w-[24em] py-2 px-3 mt-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Digite seu Email"></input>

            </div>
            <div>

              <label class="block mb-2 ml-[-31em] mt-[14em] text-sm font-medium text-gray-900 dark:text-gray-400">Sua Mensagem:</label>
              <textarea rows="4" class="block mt-3 ml-[-31em] w-[30em] text-sm text-gray-900 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blac dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deixe seu comentário..."></textarea>

            </div>
          </div>
          <div className="flex ml-[80px] ">
            <button onClick={handleOKClick} className=" rounded px-10 py-2 text-white  bg-green-400 ">Enviar</button>
            <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-red-500 ">Cancelar</button>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Modal