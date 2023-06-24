import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CriarItem from './pages/CriarItem'; 
import Home from './pages/Home';
import VerItens from './pages/VerItens'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastrar-itens" component={CriarItem} />
        <Route path="/informacoes-itens" component={VerItens} />
      </Switch>
    </Router>
  );
};

export default App;
