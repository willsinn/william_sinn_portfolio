import React from 'react';
import Navbar from './Components/Navbar';
import './App.scss';
import { About } from './Assets/content';

const App = () => {

  const splitAboutTitle = (title) => {
    const splitTitle = [];
    title.forEach((letter, i) => {
      
    });
  }
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
        <ul>

        </ul>
        {About.summary}
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
