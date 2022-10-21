import React from "react";
import Quote from "../components/Quote";
import Title from "../components/Title";
import { Fade } from "react-awesome-reveal";
import SkillBox from "../components/SkillBox";

import '../styles/Mecanical.css';
import icon1 from "../images/icons/icon1.png";
import icon2 from "../images/icons/icon2.png";
import icon3 from "../images/icons/icon3.png";

const Designer = React.forwardRef((props, ref) => (
    <div ref={ref} className="designerPage" id="mecanical" >
        <Fade direction="up" delay={50} duration={700} triggerOnce={true}>
            <Title top="as a UI / UX" bot="Designer" color="#725A6E" left={20} />
        </Fade>
        <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
            <Quote text="I am a user interface and user experience designer. I 
            like to turn complex problems into simple user interfaces with a smooth 
            experience that users love and use. I design web, mobile and enterprise applications.
I also like to help brands find their identity by designing logos, flyers... " />
        </Fade>
        <div className="skillRow">
            <Fade direction="up" delay={150} duration={700} triggerOnce={true}>
                <SkillBox title="User Experience" text="Work as a team on a variety 
                of problems and consider a solution. Market research, specifications..." icon={icon1} blue />
            </Fade>
            <Fade direction="up" delay={250} duration={700} triggerOnce={true}>
                <SkillBox title="Interactive design" text="Various types of calculations
                 such as kinematics, dynamics, statistics, transient and simulation." icon={icon2} blue />
            </Fade>
            <Fade direction="up" delay={350} duration={700} triggerOnce={true}>
                <SkillBox title="Your identity" text="design and develop new, 
                innovative products in multiple fields using computer-aided design." icon={icon3} blue />
            </Fade>
        </div>
    </div >
));

export default Designer;
