import React from "react";
import { Fade } from "react-awesome-reveal";

import '../styles/Contact.css';
import tel from "../images/icons/tel.png";
import linkedin from "../images/icons/linkedin.png";
import email from "../images/icons/email.png";
import InfoBox from "../components/InfoBox";

const Contact = React.forwardRef((props, ref) => (
    <div ref={ref} className="contactPage" id="contact" >
        <div className="leftContact">
            <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
                <InfoBox title="PHONE" content="+33 6 33 06 20 39" img={tel} />
            </Fade>
            <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                <InfoBox title="Linkedin" content="Elodie Aqua" img={linkedin} />
            </Fade>
            <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                <InfoBox title="EMAIL" content="elodie.aqua@gmail.com" img={email} />
            </Fade>
        </div>
        <div className="rightContact">
            <form>
                <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
                    <div className="doubleInput">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                    </div>
                </Fade>
                <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                    <input type="text" placeholder="Subject" />
                </Fade>
                <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                    <textarea placeholder="Message" />
                </Fade>
                <div className="btnContainer">
                    <Fade direction="up" delay={350} duration={700} triggerOnce={true}>
                        <input type="submit" value="Send" className="btn" />
                    </Fade>
                </div>
            </form>
        </div>
    </div >
));

export default Contact;
