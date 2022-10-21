import React from "react";
import quoteLeft from "../images/quoteLeft.png";
import quoteRight from "../images/quoteRight.png";

const Quote = React.forwardRef((props, ref) => {
    const text = props.text || "";
    return (
        <div ref={ref} className="QuoteDiv" >
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

    );
});

export default Quote;
