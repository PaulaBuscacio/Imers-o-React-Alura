import React from 'react';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// const Pagina404 = () => (<div>Página não encontrada</div>)

const Pagina404 = () => (<a href="https://mariosouto.com/flappy-bird-devsoutinho/"><h1>😀Clique aqui e tenha uma surpresa👍</h1></a>);
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
