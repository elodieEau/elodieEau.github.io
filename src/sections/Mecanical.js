import React from "react";
import Title from "../components/Title";

import '../styles/Mecanical.css';


const Mecanical = React.forwardRef((props, ref) => (
    <div ref={ref} className="mecanicalPage" id="mecanical" >
        <Title top="As a student in" bot="Mechanical engineering" />
    </div >
));

export default Mecanical;
