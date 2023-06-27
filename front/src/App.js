import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CriarItem from './pages/CriarItem';
import VerItens from './pages/VerItens';
import AlterarItem from './pages/AlterarItem';
import HomeProduto from './pages/HomeProduto.js';
import ExcluirItens from './pages/ExcluirItens';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Produto" component={HomeProduto} />
        <Route path="/cadastrar-itens" component={CriarItem} />
        <Route path="/informacoes-itens" component={VerItens} />
        <Route path="/alterar-itens/:id" component={AlterarItem} />
        <Route path="/Excluir-itens/" component={ExcluirItens} />
      </Switch>
    </Router>
  );
};

export default App;
