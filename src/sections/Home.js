import React from "react";
import circlesTop from "../images/circlesTop.png";
import circlesLeft from "../images/circlesLeft.png";
import eloFace from "../images/eloFace.png";
//import Typewriter from 'typewriter-effect';

import '../styles/Home.css';


const Home = React.forwardRef((props, ref) => (
    <div ref={ref} className="homePage" id="home" >
        <img src={circlesTop} className="circlesTop" alt="circles"/>
        <div className="homeContainerTop">
            <div className="hiText">
                <div>
                    <span className="hello">Hello</span>
                </div>
                <div>
                   <span className="titleFirst">I am </span> 
                    <span className="titleSecond">a future engineer</span>
                </div>
            </div>
            </div>
            <div className="homeContainerBottom">
                <div className="profilBox">
                    <img src={circlesLeft} className="circlesLeft" alt="circles"/>
                    <div className="titleHome">
                        <div className="homeName">
                            <span className="nameP">Elodie</span><br/>
                            <span className="nameN">Aqua</span>
                        </div>
                        <div className="homeDesc">Mechanical engineering student, designer and 
                        nature and sports lover
                        </div>
                    </div>
                    <img src={eloFace} className="eloFace" alt="face"/>
                </div>
            </div>

    </div >
));

export default Home;
