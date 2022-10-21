import React from "react";
import Quote from "../components/Quote";
import Title from "../components/Title";
import { Fade } from "react-awesome-reveal";
import SkillBox from "../components/SkillBox";

import '../styles/Mecanical.css';
import icon1 from "../images/icons/icon1.png";
import icon2 from "../images/icons/icon2.png";
import icon3 from "../images/icons/icon3.png";

const Mecanical = React.forwardRef((props, ref) => (
    <div ref={ref} className="mecanicalPage" id="mecanical" >
        <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
            <Title top="As a student in" bot="Mechanical engineering" color="#A58DA1" left={20} />
        </Fade>
        <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
            <Quote text="As a student in my 4th year of mechanical engineering, my training has enabled
         me to acquire solid technical knowledge but also a sense of organisation and teamwork. The 
         aim of the mechanical engineering specialisation at Polytech, which covers a wide range of 
         expertise, is to train engineers capable of managing the technical, organisational and financial 
         aspects of a project, from the drawing up of specifications to production.  " />
        </Fade>
        <div className="skillRow">
            <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                <SkillBox title="Research & management" text="Work as a team on a variety of problems and consider
             a solution. Market research, specifications..." icon={icon1} />
            </Fade>
            <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                <SkillBox title="Numerical calculations" text="Various types of calculations such as kinematics,
             dynamics, statistics, transient and simulation." icon={icon2} />
            </Fade>
            <Fade direction="up" delay={350} duration={700} triggerOnce={true}>
                <SkillBox title="Computer-aided design" text="design and develop new, innovative products 
            in multiple fields using computer-aided design." icon={icon3} />
            </Fade>
        </div>
    </div >
));

export default Mecanical;
