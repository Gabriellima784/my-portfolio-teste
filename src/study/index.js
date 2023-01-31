import React from "react";
import Header2 from "./cabeçalho/header";
import ReactDom from "react-dom";
import ReactElasticCarousel from "react-elastic-carousel";
import "./styles.css";
import Aboutme2 from "./quem";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



function Estudante () {
    return (
        <>
        <Header2/>
        <Aboutme2/>
        </>
    )
}

const rootElement = document.getElementById("root");

export default Estudante