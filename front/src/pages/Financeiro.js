import React from "react";
import {Link} from "react-router-dom"
import api from "../api/api";

const homeFinanceiro= () =>{
    return(
        // <div className="w-full h-full bg-fundo"> </div>
        <main className=" bg-gray-900 w-full min-h-screen align-middle ">
            <header className="bg-gray-300 flex h-[72px] align-middle items-center justify-between">
                <div className="m-4 h-8 w-8  ">
                   
                    <img className="h-8 w-8" src="../components/logo.png" alt="Logo "></img>
                   
                </div>
                <nav className="w-full"> 
                    <ul className="flex flex-row justify-between mr-8">
                        <li className="no-underline m-2 text-lg"><Link to="/">criar</Link></li>
                        <li className="no-underline m-2 text-lg"><Link to="/">Baixa</Link></li>
                        <li className="no-underline m-2 text-lg"><Link to="/">listar</Link></li>
                        <li className="no-underline m-2 text-lg"><Link to="/">excluir</Link></li>
                        <li className="no-underline m-2 text-lg"><Link to="/">alterar</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="align-middle justify-around">
                <h1 className="text-gray-200 text-3xl font-mono w-min ">
                    Financeiro
                </h1>
            </div>
        </main>
    )
}

export default homeFinanceiro