import React from "react";
import Quote from "../components/Quote";
import Title from "../components/Title";

import '../styles/Mecanical.css';


const Mecanical = React.forwardRef((props, ref) => (
    <div ref={ref} className="mecanicalPage" id="mecanical" >
        <Title top="As a student in" bot="Mechanical engineering" color="#A58DA1" left={20} />
        <Quote text="As a student in my 4th year of mechanical engineering, my training has enabled
         me to acquire solid technical knowledge but also a sense of organisation and teamwork. The 
         aim of the mechanical engineering specialisation at Polytech, which covers a wide range of 
         expertise, is to train engineers capable of managing the technical, organisational and financial 
         aspects of a project, from the drawing up of specifications to production.  " />
    </div >
));

export default Mecanical;
