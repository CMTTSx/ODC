
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
                <h2 className=" mt-5 " >Agendar Paciente </h2>
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Digite o nome do Paciente"></input>
        
              <label class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-800">Horário</label>
              <select class="shadow appearance border border-gray-300 bg-white text-sm rounded-lg block w-full p-2.5 ">
                <option selected>---</option>
                <option>07:30</option>
                <option>08:00</option>
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
                <option>10:30</option>
                <option>11:00</option>
                <option>11:30</option>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
                <option>14:30</option>
                <option>15:00</option>
                <option>15:30</option>
                <option>16:00</option>
                <option>16:30</option>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>

              </select>

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