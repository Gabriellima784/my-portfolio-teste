import React from 'react';
import "./about.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

function Aboutme2 () {
    return ( 
        <>
        <div className="bg-black" id="background">. 
            <div id="textobase">Olá caro amigo(a) estudante,</div>
            <br></br>
            <p id="textobase2">sou Gabriel Lima, desenvolvedor web com formação FullStack com especialização
            em front-end. <p> Desde cedo sempre fui apaixonado por Design Gráfico, aos 11 anos já fazia 
            minhas primeiras edições de vídeo e animações em 3D através de softwares avançados
            como Cinema4D e AfterEffects, porém com o passar dos anos fui gradativamente me afastando do Design, 
            mas retornei a essa paixão  aos 20 quando decidi começar a estudar
            desenvolvimento Web, e vi ali uma oportunidade de unificar o meu amor pelas personalizações gráficas, 
            com o desenvolvimento de páginas e websites. </p></p>
            <p id="textobase3"> Atualmente estou me especializando em áreas de conhecimento Front-End e UX/UI
            com o principal fundamento de trazer um diferencial ao mercado, na experiência do usuario
            ao acessar uma página Web ou uma aplicação em dispositivo móvel, tornando a usabilidade do mesmo inesquecivel
            e marcante para todos que a utilizarem.</p>
            <h1 id="textolinguagens">Essa página ainda está em construção! Novidades em breve...</h1>



        </div>
        </>
    )
}




export default Aboutme2; 