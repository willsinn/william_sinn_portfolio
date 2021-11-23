import React from 'react';
import Navbar from './Components/Navbar';
import './App.scss';
import { About } from './Assets/content';
import AboutBackground from "./Assets/about-background.png";

const App = () => {

  return (
    <div className="app">
      <Navbar />
      <section className="header">
        <div className="wrapper">
            <h4>Welcome! I'm ...</h4>
            <div className="static-txt">
              <h1>Will Sinn</h1>
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
        <h1>My Story</h1>
        <img className="about-img" src={AboutBackground}/>
        <p>{About.summary}</p>
      </section>

      <section className="skillset">
      This is where my skills go

        <div className="skill-tv">
          <div className="monitor"></div>
          <span>the skill tv</span>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>

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
