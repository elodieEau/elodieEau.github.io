import React from "react";

const Home = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="titleDouble" >
            <span className="doubleTop">{props.top}</span><br />
            <span className="doubleBot">{props.bot}</span>
        </div >);
});

export default Home;
