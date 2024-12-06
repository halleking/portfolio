import './App.css';
import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
