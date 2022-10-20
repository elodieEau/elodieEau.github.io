import React from "react";
//import Typewriter from 'typewriter-effect';

import '../styles/Home.css';


const Home = React.forwardRef((props, ref) => (
    <div ref={ref} className="homePage" id="home" >
        <div className="homeContainerTop">
            <div className="hiText">
                <div>
                    <span className="hello">Hello</span>
                </div>
                <div>
                   <span className="titleFirst">I am </span> 
                    <span className="titleSecond">a future engineer</span>
                </div>
            </div>
        </div>
    </div >
));

export default Home;
