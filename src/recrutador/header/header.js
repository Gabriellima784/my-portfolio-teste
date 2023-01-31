import React, { useState } from "react";
import "./comp.css";
import { Link, ScrollLink } from "react-scroll";



const Header = () => {

    const {click, setClick} = useState (false)
    const handleClick = () => setClick (!click)

    const closeMenu = () => setClick (false)

    return( 
        <>
            <div id="header">
                <nav> 
                     <ul className= "flex h-10 justify-between items-center px-14 relative" id="textoheader">
                        
                        <li className="text-gray-100 align-top" id="ho">Home</li>

                            <li className="text-gray-100" id="of">
                                < Link to='oque' spy={true} smooth={true} offset={15} duration={500} > O que ofereço</Link>
                            </li>

                                    <li className="text-gray-100" id="projetos">
                                        <Link to="background2" spy={true} smooth={true} offset={30} duration={600} > Projetos </Link>
                                    </li>

                                            <li className="text-gray-100" id="cont">
                                                <Link to="first" spy={true} smooth={true} offset={30} duration={600} > Contato </Link>
                                            </li>
                    </ul> 
                </nav>

                    <h1 className="text-gray-100 " id="texto1"> olá, seja bem vind@! sou</h1>
                        <h1 className="text-gray-100 " id="texto2"> gabriel lima</h1>
                            <h1 className="text-gray-100 " id="texto3"> desenvolvedor front-end ux/ui</h1>            
             </div>
        </>
    )
}




export default Header; 

