import React from 'react';
import {ReactTyped} from 'react-typed';


function Intro() {
    return (
        <div>
            <h1>Hi, I'm Halle King</h1>
            <p>
                {" "}
                <ReactTyped
                    strings={[ "Software Engineer", "Game Engineer", "Game Developer", "Game Designer"]}
                    typeSpeed={100}
                    loop
                    backSpeed={50}
                    cursorChar="|"
                    showCursor={true}
                />
            </p>
        </div>
    );
}

export default Intro;