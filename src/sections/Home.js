import React from "react";
import circlesTop from "../images/circlesTop.png";
import circlesLeft from "../images/circlesLeft.png";
import eloFace from "../images/eloFace.png";
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";

import '../styles/Home.css';
import { Parallax } from "react-scroll-parallax";


const Home = React.forwardRef((props, ref) => (
    <div ref={ref} className="homePage" id="home" >
        <img src={circlesTop} className="circlesTop" alt="circles" />
        <div className="homeContainerTop">
            <div className="hiText">
                <div>
                    <Fade direction="up" delay={100} duration={700} triggerOnce={true}>
                        <span className="hello">Hello</span>
                    </Fade>
                </div>
                <div>
                    <Fade direction="up" delay={200} duration={700} triggerOnce={true}>
                        <div className="titleSecond">
                            <span className="titleFirst">I am&nbsp;</span>
                            a&nbsp;<Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    cursorClassName: "cursor",
                                    delay: 100,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span class="webApp">future engineer</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString('<span class="webApp">Designer</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </div>
                        <div className="typewritterOff">I am a&nbsp;<span className="webApp">future engineer</span></div>
                    </Fade>
                </div>
            </div>
        </div>
        <div className="homeContainerBottom">
            <div className="profilBox">
                <Fade direction="left" delay={300} duration={700} triggerOnce={true}>
                    <img src={circlesLeft} className="circlesLeft" alt="circles" />
                </Fade>

                <div className="titleHome">
                    <Fade direction="up" delay={400} duration={700} triggerOnce={true}>
                        <div className="homeName">
                            <span className="nameP">Elodie</span><br />
                            <span className="nameN">Aqua</span>
                        </div>
                    </Fade>
                    <Fade direction="up" delay={500} duration={700} triggerOnce={true}>
                        <div className="homeDesc">Mechanical engineering student, designer and
                            nature and sports lover
                        </div>
                    </Fade>
                </div>
                <Fade direction="up" delay={500} duration={700} triggerOnce={true}>
                    <Parallax speed={5}>
                        <img src={eloFace} className="eloFace" alt="face" />
                    </Parallax>
                </Fade>
            </div>
        </div>

    </div >
));

export default Home;
