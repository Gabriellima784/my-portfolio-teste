import React from "react";
import { Link } from "react-router-dom";
import "./first.css"

const Firstpage = () => {
    return (
        <>
<div className="bg-black absolute" id="back">
        <div className="bg-zinc-300 mt-40" id="caixa">
            <h1 id="um"> Seja bem vind@ ao meu portfólio!</h1>
                <h2 id="dois">É um prazer receber você aqui</h2>
                    <h3 id="tres"> ⇁ Antes de começarmos me conta ↽ </h3>
                        <h3 id="quatro">  Você é um? </h3>
            <br></br>
        </div>
        <div className="bg-zinc-300"  id="container">
            <Link to={'Recrutador'} target="_blank">
            <div id="rec">Recrutador (a)</div>
            </Link>
            
                <Link to={'Estudante'} target="_blank">
                <div id="est">Estudante</div>
                 </Link>

        </div>
    <div id="container3">
            <h1 className="bg-zinc-300">.</h1>                   
                <h1 className="bg-zinc-300">.</h1>                   
                    <h1 id="cinco" className="bg-zinc-300">Essa informação não é armazenada em banco de dados</h1>                   
                        <h1 id="seis" className="bg-zinc-300">Porém as páginas possuem conteúdos diferentes de acordo com a categoria selecionada </h1>
    </div>    
</div>
    </>
    )
}

export default Firstpage