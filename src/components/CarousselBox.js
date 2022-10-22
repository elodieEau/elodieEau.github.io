import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import Quote from "./Quote";
import Title from "./Title";


import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import line from "../images/line.png";

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default function CarousselBox(props) {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggle, setToggle] = useState(true);
    const length = props.top.length;
    const top = props.top[currentIndex] || "";
    const bot = props.bot[currentIndex] || "";
    const text = props.text[currentIndex] || "";
    const image = props.image[currentIndex] || null;
    const invert = (props.invert && windowSize.innerWidth > 991) || false;

    return (
        <>
            <div className="caroussel">
                <div className="bigArrowBox" onClick={() => {
                    if (currentIndex > 0) {
                        setCurrentIndex((currentIndex - 1) % length);
                    } else {
                        setCurrentIndex(length - 1);
                    }
                    setToggle(false);
                    setTimeout(() => { setToggle(true) }, 1);
                }} >
                    <div className="smallArrow">
                        <Fade direction="left" delay={50} duration={700} triggerOnce={true}>
                            <img src={leftArrow} alt="leftArrow" className="arrow" />
                        </Fade>
                    </div>
                </div>
                <div className="midBox" style={{ display: toggle ? "flex" : "none" }}>
                    {
                        invert ?
                            <>
                                <div className="rightBox">
                                    <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
                                        <img src={image} alt="imag right" className="rightImage" />
                                    </Fade>
                                </div>
                                <div className="leftBox">
                                    <div className="topBox">
                                        <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                                            <Title top={top} bot={bot} color="#474747" mgLeft="0" align="right" />
                                        </Fade>
                                    </div>
                                    <div className="botBox">
                                        <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                                            <Quote text={text} mg="0" />
                                        </Fade>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="leftBox">
                                    <div className="topBox">
                                        <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
                                            <Title top={top} bot={bot} color="#474747" mgLeft="0" />
                                        </Fade>
                                    </div>
                                    <div className="botBox">
                                        <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                                            <Quote text={text} mg="0" />
                                        </Fade>
                                    </div>
                                </div>

                                <div className="rightBox">
                                    <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                                        <img src={image} alt="imag right" className="rightImage" />
                                    </Fade>
                                </div>
                            </>

                    }
                </div>
                <div className="bigArrowBox" onClick={() => {
                    setCurrentIndex((currentIndex + 1) % length);
                    setToggle(false);
                    setTimeout(() => { setToggle(true) }, 1);

                }}>
                    <div className="smallArrow">
                        <Fade direction="right" delay={50} duration={700} triggerOnce={true}>
                            <img src={rightArrow} alt="rightArrow" className="arrow" />
                        </Fade>
                    </div>
                </div>
            </div >
            <div className="carousselMobile">
                <div className="imageM" style={{ display: toggle ? "block" : "none" }}>
                    <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
                        <img src={image} alt="imag right" className="rightImageM" />
                    </Fade>
                </div>
                <div className="contentM" style={{ display: toggle ? "block" : "none" }}>
                    <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                        <Title top={top} bot={bot} color="#474747" mgLeft="50px" align="left" />
                    </Fade>
                    <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                        <Quote text={text} mg="0" />
                    </Fade>
                </div>
                <div className="btnArrows">
                    <Fade direction="left" delay={350} duration={700} triggerOnce={true} >
                        <img src={leftArrow} alt="leftArrow" className="arrowM" onClick={() => {
                            if (currentIndex > 0) {
                                setCurrentIndex((currentIndex - 1) % length);
                            } else {
                                setCurrentIndex(length - 1);
                            }
                            setToggle(false);
                            setTimeout(() => { setToggle(true) }, 1);
                        }} />
                    </Fade>
                    <Fade direction="left" delay={350} duration={700} triggerOnce={true}>
                        <img src={rightArrow} alt="rightArrow" className="arrowM" onClick={() => {
                            setCurrentIndex((currentIndex + 1) % length);
                            setToggle(false);
                            setTimeout(() => { setToggle(true) }, 1);
                        }} />
                    </Fade>
                </div>
                <div className="lineContainer">
                    <Fade direction="up" delay={400} duration={700} triggerOnce={true}>
                        <img src={line} alt="rightArrow" className="line" />
                    </Fade>
                </div>
            </div>
        </>

    );
}