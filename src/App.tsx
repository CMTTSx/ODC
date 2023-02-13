import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


//Components
import SignIn from '../src/Pages/SignIn';
import Home from './Pages/Home';
import Agenda from './Pages/Agenda';
import Clientes from './Pages/Clientes';
import Financeiro from './Pages/Financeiro';
import Gerenciamento from './Pages/Gerenciamento';
import Suporte from './Pages/Suporte';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/paginaInicial" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/gerenciamento" element={<Gerenciamento />} />
          <Route path="/suporte" element={<Suporte />} />

        </Routes>
      </BrowserRouter>
  );
}

