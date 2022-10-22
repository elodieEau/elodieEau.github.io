import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";

import '../styles/Contact.css';
import tel from "../images/icons/tel.png";
import linkedin from "../images/icons/linkedin.png";
import email from "../images/icons/email.png";
import InfoBox from "../components/InfoBox";
import emailjs from '@emailjs/browser';

const Contact = React.forwardRef((props, ref) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xjd3v3q', 'template_5j9v6ii', form.current, 'PfXBfnDkg2AiNkGfc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <div ref={ref} className="contactPage" id="contact" >
            <div className="leftContact">
                <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
                    <InfoBox title="PHONE" content="+33 6 33 06 20 39" img={tel} type="tel" />
                </Fade>
                <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                    <InfoBox title="Linkedin" content="Elodie Aqua" img={linkedin} type="linkedin" />
                </Fade>
                <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                    <InfoBox title="EMAIL" content="elodie.aqua@gmail.com" img={email} type="email" />
                </Fade>
            </div>
            <div className="rightContact">
                <form ref={form} onSubmit={sendEmail}>
                    <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
                        <div className="doubleInput">
                            <input type="text" placeholder="Name" name="name" />
                            <input type="email" placeholder="Email" name="email" />
                        </div>
                    </Fade>
                    <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                        <input type="text" placeholder="Subject" name="subject" />
                    </Fade>
                    <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                        <textarea placeholder="Message" name="message" />
                    </Fade>
                    <div className="btnContainer">
                        <Fade direction="up" delay={350} duration={700} triggerOnce={true}>
                            <input type="submit" value="Send" className="btn" />
                        </Fade>
                    </div>
                </form>
            </div>
        </div >
    )
});

export default Contact;
