import React from "react";

const InfoBox = React.forwardRef((props, ref) => {
    const img = props.img || null;
    const title = props.title || "";
    const content = props.content || "";
    const type = props.type || "";
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
                    {
                        type === "tel" ?
                            <a href="tel:0033633062039" className="link">{content}</a>
                            : (
                                type === "email" ?
                                    <a href="mailto:elodie.aqua@gmail.com" className="link">{content}</a>
                                    :
                                    <a href="https://www.linkedin.com/in/elodie-aqua-389254200/" target="_blank"
                                        className="link">{content}</a>
                            )

                    }
                </div>
            </div>
        </div>

    );
});

export default InfoBox;
