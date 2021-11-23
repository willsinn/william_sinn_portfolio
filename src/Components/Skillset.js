import React from 'react';
import JS from "../Assets/Icons/js.png";

const Skillset = () => {

    return (
        <section className="skillset">
            <div className="skill-tv">
            <div className="monitor"></div>
                <span>the skill tv</span>
            </div>
            <ul className="skill-icons">
                <li className="skill-icon"><span><img className="skill-icon-img" src={JS}/></span></li>
                <li className="skill-icon"><span><img className="skill-icon-img" src={JS}/></span></li>
                <li className="skill-icon"><span><img className="skill-icon-img" src={JS}/></span></li>
                <li className="skill-icon"><span><img className="skill-icon-img" src={JS}/></span></li>
            </ul>
        </section>
    )

}

export default Skillset