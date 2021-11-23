import React from 'react';
import Navbar from './Components/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <section className="header">
        <div className="wrapper">
            <div className="static-txt">
              <h1>
                Will Sinn
              </h1>
            </div>
            <ul class="dynamic-txts">
              <li><span>YouTuber</span></li>
              <li><span>Designer</span></li>
              <li><span>Developer</span></li>
              <li><span>Freelancer</span></li>
            </ul>
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
