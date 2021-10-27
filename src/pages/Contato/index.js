// import React from "react";

// function Contato(){
//     return(
//         <h1>Pagina Contato</h1>
//     );
// };

// export default Contato;

import React from "react";

function Form(){
    return(
        <form action="POST">
            <div>
                <h1>Formulário de Contato</h1>
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