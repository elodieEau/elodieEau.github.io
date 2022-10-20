import React from "react";

const Home = React.forwardRef((props, ref) => {
    const left = props.left || 0;
    const right = props.right || 0;
    const align = props.align || "left";
    const top = props.top || "";
    const bot = props.bot || "";
    const color = props.color || "#000";
    return (
        <div ref={ref} className="titleDouble" style={{ textAlign: align, marginRight: right }} >
            <span className="doubleTop">{top}</span><br />
            <span className="doubleBot" style={{ color: color, marginLeft: left }}>
                {bot}
            </span>
        </div >);
});

export default Home;
