import React from "react";

const InfoBox = React.forwardRef((props, ref) => {
    const img = props.img || null;
    const title = props.title || "";
    const content = props.content || "";
    return (
        <div className="infoBox">
            <div className="infoLL">

            </div>
            <div className="infoLeft">
                <img src={img} alt="tel" className="contactIcon" />
            </div>
            <div className="infoRight">
                <div className="infoTitle">
                    {title}
                </div>
                <div className="infoContent">
                    {content}
                </div>
            </div>
        </div>

    );
});

export default InfoBox;
