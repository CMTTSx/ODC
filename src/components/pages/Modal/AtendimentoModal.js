
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
  
          <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">
  
            <div className="flex  text-lg  text-zinc-600   mb-10">
              <div class="mb-4 ">
                <label class="block text-gray-700 text-sm text-center font-bold mb-2 mt-2 text-[1.2em] ">
                  Adicionar Paciente 
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Digite o nome do Paciente"></input>
              </div>
            </div>
            <div className="flex ml-[50px] ">
              <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-green-400 ">Sim</button>
              <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-red-500 ">Não</button>
            </div>
  
          </div>
        </div>
      </div>
  
    );
  }
  
  export default Modal