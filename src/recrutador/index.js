import react from "react";
import ReactDom from "react-dom";
import ReactElasticCarousel from "react-elastic-carousel";
import Aboutme from "./quem sou";
import Header from "./header/header";
import Item from "./item";
import Oqe from "./o que ofereço";
import Contato from "./contato/contato";
import "./styles.css";
import Portfolio from "./portfolio";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Carro1() {
  return (
    <>
    < Header />
    < Aboutme />
      <h1 style={{ textAlign: "center" }}></h1>
      <div className="App bg-black">
        <ReactElasticCarousel breakPoints={breakPoints}>
          <Item id="html"></Item>
          <Item id="js"></Item>
          <Item id="css"></Item>
          <Item id="react"></Item>
          <Item id="figma"></Item>
          <Item id="flutter"></Item>
          <Item id="sql"></Item>
          <Item id="git"></Item>
        </ReactElasticCarousel>
      </div>
    <Oqe/>
    < Portfolio/>
    <Contato/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<Carro1 />, rootElement);

export default Carro1 