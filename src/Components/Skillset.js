import React from 'react';
import { useState } from 'react/cjs/react.development';
import JS from "../Assets/Icons/js.png";


const jsAnimations= ()=> {
    return 
    <div>hi</div>
}
const Skillset = () => {
    const [active, setActive] = useState("")

    const handleHover = (skill) => {
        console.log(active)
        setActive(skill)    
    }
    return (
        <section className="skillset">
            <div className="skill-tv">
            <div className="monitor"></div>
                <span>the skill tv</span>
            </div>
            <ul className="skill-icons">
                <li className="skill-icon"><span><img onMouseOver={(e) => handleHover(e, "js")} className="skill-icon-img" src={JS}/></span></li>
                <li className="skill-icon"><span><img className="skill-icon-img" src={JS}/></span></li>
                <li className="skill-icon"><span><img className="skill-icon-img" src={JS}/></span></li>
                <li className="skill-icon"><span><img className="skill-icon-img" src={JS}/></span></li>
            </ul>
        </section>
    )

}

export default Skillset