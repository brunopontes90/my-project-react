import React from "react";
import ReactDOM from "react-dom";
import "../css/form.css"

function Form(){
    return(
        <form action="POST">
            <div>
                <h1>Bem vindo ao formulário de teste ReactJS</h1>
            </div>
            <div>
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome" required/>
                <label>Endereço</label>
                <input type="text" placeholder="Digite seu endereço" required/>
            </div>
            
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;