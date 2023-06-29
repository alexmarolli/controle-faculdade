import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CriarItem from './pages/CriarItem';
import VerItens from './pages/VerItens';
import AlterarItem from './pages/AlterarItem';
import HomeProduto from './pages/HomeProduto.js';
import HomeParceiro from './pages/HomeParceiro';
import ExcluirItens from './pages/ExcluirItens';
import CriarParceiro from './pages/CriarParceiro';
import Register from './pages/Register';
import Login from './pages/Login';
import homeFinanceiro from './pages/Financeiro';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Produto" component={HomeProduto} />
        <Route exact path="/Parceiro" component={HomeParceiro} />
        <Route exact path="/Financeiro" component={homeFinanceiro}/>
        <Route exact path="/criar-parceiro" component={CriarParceiro}/>
        <Route path="/cadastrar-itens" component={CriarItem} />
        <Route path="/informacoes-itens" component={VerItens} />
        <Route path="/alterar-itens/:id" component={AlterarItem} />
        <Route path="/Excluir-itens/" component={ExcluirItens} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
