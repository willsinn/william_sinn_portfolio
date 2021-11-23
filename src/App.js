import React from 'react';
import Navbar from './Components/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      Navigation
      <Navbar />
      <section className="header">
        <h1 className="wrapper">
          <div className="static-txt">Will Sinn</div>
          Developer
          <ul class="dynamic-txts">
            <li><span>YouTuber</span></li>
            <li><span>Designer</span></li>
            <li><span>Developer</span></li>
            <li><span>Freelancer</span></li>
          </ul>
        </h1>
        
      </section>

      <section className="about">
        About Will Sinn
      </section>

      <section className="skillset">
        This is where my skills go
      </section>

      <section className="projects">
        Project 1
        Project 2
        Project 3
        Project 4
      </section>    
        
    </div>
  );
}

export default App;
