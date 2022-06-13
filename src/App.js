import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



//Importando Pages
import PaginaInicial from './components/pages/PaginaInicial';
import Agendamento from './components/pages/Agendamento';
import Clientes from './components/pages/Clientes';
import AdicionarCadastro from './components/pages/AdicionarCadastro';
import ControleFinanceiro from './components/pages/ControleFinanceiro';
import NotaFiscal from './components/pages/NotaFiscal';
import EmissaoBoleto from './components/pages/EmissaoBoleto';
import Financeiro from './components/pages/Financeiro';
import Estoque from './components/pages/Estoque';
import Usuario from './components/pages/Usuario';
import Suporte from './components/pages/Suporte';



function App() {
  return (
    <Router>
      <div className='App'>
      </div>
      <Switch>
        <Route exact path='/' component={PaginaInicial} />
        <Route exact path='/agendamento' component={Agendamento} />
        <Route exact path='/clientes' component={Clientes} />
        <Route exact path='/adicionar-cadastro' component={AdicionarCadastro} />
        <Route exact path='/financeiro' component={Financeiro} />
        <Route exact path='/nota-fiscal' component={NotaFiscal} />
        <Route exact path='/emissao-boleto' component={EmissaoBoleto} />
        <Route exact path='/estoque' component={Estoque} />
        <Route exact path='/gerenciamento-de-usuarios' component={Usuario} />
        <Route exact path='/suporte' component={Suporte} />
        <Route exact path='/controle-financeiro' component={ControleFinanceiro} />



      </Switch>
    </Router>
  );
}
 
export default App;