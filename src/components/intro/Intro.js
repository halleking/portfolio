import React from 'react';
import './Intro.css';
import portrait from '../../assets/portrait.png'


function Intro() {
    return (
        <div className='container-div'>
            <div className='name'>Hi, I'm Halle King<div id='title'></div></div>
            <img className='portrait' src={portrait}></img>
        </div>
    );
}

export default Intro;