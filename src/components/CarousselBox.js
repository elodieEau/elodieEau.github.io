import React from "react";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import Quote from "./Quote";
import Title from "./Title";

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
                    <img src={leftArrow} alt="leftArrow" className="arrow" />
                </div>
            </div>
            <div className="midBox">
                <div className="leftBox">
                    <div className="topBox">
                        <Title top={top} bot={bot} color="#474747" />
                    </div>
                    <div className="botBox">
                        {text}
                    </div>
                </div>

                <div className="rightBox">
                    <img src={image} alt="imag right" className="rightImage" />
                </div>
            </div>
            <div className="bigArrowBox">
                <div className="smallArrow">
                    <img src={rightArrow} alt="rightArrow" className="arrow" />
                </div>
            </div>
        </div>

    );
});

export default CarousselBox;
