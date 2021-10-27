import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from './pages/Main';
import Perfil from './pages/Perfil';
import Contato from './pages/Contato';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/contato" component={Contato}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;