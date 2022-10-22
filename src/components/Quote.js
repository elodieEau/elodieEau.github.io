import React from "react";
import quoteLeft from "../images/quoteLeft.png";
import quoteRight from "../images/quoteRight.png";
import { Parallax } from "react-scroll-parallax";

const Quote = React.forwardRef((props, ref) => {
    const text = props.text || "";
    const mg = props.mg || "70px 2vw 0 22vw";
    return (
        <Parallax speed={3}>
            <div ref={ref} className="QuoteDiv" style={{ margin: mg }}>
                <div className="quoteIconL">
                    <img src={quoteLeft} alt="quote left" className="iconQuote" />
                </div>
                <div className="quoteText">
                    {text}
                </div>
                <div className="quoteIconR">
                    <img src={quoteRight} alt="quote right" className="iconQuote" />
                </div>
            </div>
        </Parallax>
    );
});

export default Quote;



