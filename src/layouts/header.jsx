import React from "react";
import "../css/header.css";

function Header(){
    return(
        <header>
            <ul>
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/contato">Contato</a>
                </li>
                <li>
                    <a href="/perfil">Perfil</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;