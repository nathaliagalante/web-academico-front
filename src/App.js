import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import './App.css';

import { Menu } from './components/menu/Menu';
import  Form  from './components/form/Form';
import  Home  from './pages/home/Home';
import  FazerMatricula from './pages/VidaAcademica/matricula/FazerMatricula';
import Horario from './pages/VidaAcademica/horario/Horario';
import Boletim from './pages/VidaAcademica/boletim/Boletim';
import ConsultarACG from './pages/VidaAcademica/acg/ConsultarACG';
import Historico from './pages/VidaAcademica/historico/Historico';
import ResponderCPA from './pages/VidaAcademica/cpa/ResponderCPA';
import AtualizarCadastro from './pages/conta/AtualizarCadastro/AtualizarCadastro';
import AlterarSenha from './pages/conta/AlterarSenha/AlterarSenha';
import Comprovante from './pages/VidaAcademica/horario/Comprovante';
import { UserContext } from './services/UserContext';

function App() {
    const [usuario] = useState(null);
      
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/form/Form" />} />
            <Route path="/form/Form" component={ Form } />
            <Route path="/VidaAcademica/Comprovante" component={ Comprovante } />

            <UserContext.Provider value={{usuario}}>
                <Menu />    
                    <Route path="/home" component={ Home } />
                    <Route path="/VidaAcademica/FazerMatricula" component={ FazerMatricula } />
                    <Route path="/VidaAcademica/Horario" component={ Horario } />
                    <Route path="/VidaAcademica/Boletim" component={ Boletim } />
                    <Route path="/VidaAcademica/ConsultarACG" component={ ConsultarACG } />
                    <Route path="/VidaAcademica/Historico" component={ Historico } />
                    <Route path="/VidaAcademica/ResponderCPA" component={ ResponderCPA } />
                    <Route path="/conta/AtualizarCadastro" component={ AtualizarCadastro } />
                    <Route path="/conta/AlterarSenha" component={ AlterarSenha } />
             </UserContext.Provider>
        </Switch>
    </BrowserRouter>
    
  );
}

export default App;
