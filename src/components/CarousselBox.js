import React from "react";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import Quote from "./Quote";
import Title from "./Title";
import { Fade } from "react-awesome-reveal";

const CarousselBox = React.forwardRef((props, ref) => {
    const top = props.top || "";
    const bot = props.bot || "";
    const text = props.text || "";
    const image = props.image || null;
    const invert = props.invert || false;
    return (
        <div ref={ref} className="caroussel">
            <div className="bigArrowBox">
                <div className="smallArrow">
                    <Fade direction="left" delay={50} duration={700} triggerOnce={true}>
                        <img src={leftArrow} alt="leftArrow" className="arrow" />
                    </Fade>
                </div>
            </div>
            <div className="midBox">
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
            <div className="bigArrowBox">
                <div className="smallArrow">
                    <Fade direction="right" delay={50} duration={700} triggerOnce={true}>
                        <img src={rightArrow} alt="rightArrow" className="arrow" />
                    </Fade>
                </div>
            </div>
        </div>

    );
});

export default CarousselBox;
