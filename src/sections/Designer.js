import React from "react";
import Quote from "../components/Quote";
import Title from "../components/Title";
import { Fade } from "react-awesome-reveal";
import SkillBox from "../components/SkillBox";
import CarousselBox from "../components/CarousselBox";

import '../styles/Mecanical.css';
import icon1 from "../images/icons/icon1.png";
import icon2 from "../images/icons/icon2.png";
import icon3 from "../images/icons/icon3.png";

import logoEden from "../images/logos/logoEden.png";
import logoBim from "../images/logos/logoBim.png";
import logoGym from "../images/logos/logoGym.png";
import logoJF from "../images/logos/logoJF.png";
import logoOurs from "../images/logos/logoOurs.png";
import logoCoq from "../images/logos/logoCoq.png";

import appGym from "../images/apps/appGym.png";
import appArpege from "../images/apps/appArpege.png";

const Designer = React.forwardRef((props, ref) => (
    <div ref={ref} className="designerPage" id="designer" >
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
        <CarousselBox
            image={[logoEden, logoBim, logoGym, logoOurs, logoJF, logoCoq]}
            text={["6 out of 10 French people observe the effects of climate change in their garden and 8 out of 10 think that there is not enough vegetation in the city centre. EdenBox's objective was to respond to this problem by creating boxes to be delivered containing seeds and plants to grow on one's balcony.",
                "Participation au championnat régional des Mini entreprises Entreprendre Pour Apprendre (EPA). Travail en groupe. Conception d’un produit biodégradable. Responsable design communication. Création d’un logo ainsi que d’un site internet pour la mini entreprise BIM plates..",
                "Application for a lifeguard who wants to give private lessons. You will be able to book for your children, see the calendar of upcoming lessons and pay directly through the application. All you have to do is come and enjoy!",
                "Logo for a student office in Lyon",
                "Creation of a logo for the florist JéFleur located in Clermont Ferrand.",
                "Company for the design and sale of luxury boat shells"]}
            top={["Logo", "Logo", "Logo", "Logo", "Logo", "Logo"]}
            bot={["EdenBox", "BIM", "Lucaquagym", "Grey g’ours", "Jé’Fleur", "Coque ô rico"]}
        />

        <CarousselBox
            image={[appGym]}
            text={["Application for a lifeguard who wants to give private lessons. You will be able to book for your children, see the calendar of upcoming lessons and pay directly through the application. All you have to do is come and enjoy!"]}
            top={["Website / Applications"]}
            bot={["Lucaquagym"]}
            invert />

    </div >
));

export default Designer;
