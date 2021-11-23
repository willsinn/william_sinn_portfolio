import React from 'react';
import Navbar from './Components/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      Navigation
      <Navbar />
      <section className="header">
        <div className="wrapper">
        <h1>
          <div className="static-txt">
            <span className="header-title">
              Will Sinn
            </span>
          </div>
          <ul class="dynamic-txts">
            <li><span className="header-subtitle">YouTuber</span></li>
            <li><span className="header-subtitle">Designer</span></li>
            <li><span className="header-subtitle">Developer</span></li>
            <li><span className="header-subtitle">Freelancer</span></li>
          </ul>
          </h1>  

        </div>
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
