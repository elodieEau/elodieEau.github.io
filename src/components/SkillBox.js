import React from "react";

const SkillBox = React.forwardRef((props, ref) => {
    const icon = props.icon || null;
    const title = props.title || "";
    const text = props.text || "";
    return (
        <div ref={ref} className="skillBox">
            <div className="skillIcon">
                <img src={icon} alt="icon" className="skillImg" />
            </div>
            <div className="skillTitle">
                {title}
            </div>
            <div className="skillText">
                {text}
            </div>
        </div>

    );
});

export default SkillBox;
