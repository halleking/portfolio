import './App.css';
import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <div id='top'>
        <div className='header'><Header/></div>
        <div className='intro'><Intro/></div>
        {/*<Nav/>*/}    
      </div>
      <div id='bottom'>
        <div className='about'><About/></div>
        <div className='main'><Projects/></div>
      </div>
      <div className='footer-container'><Footer/></div>
    </div>
  );
}

export default App;
