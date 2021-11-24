import React from 'react';
import { useState } from 'react/cjs/react.development';
import JS from "../Assets/Icons/js.png";


const initMsg = <div>
                    <div>Hey, Checkout My Skills Below!</div>
                    <div>Hover over an icon for more information on each language</div>
                </div>

const jsMsg =   <div>
                    <div>Other Javascript frameworks and libraries that I'm comfortable with...</div>
                    <div>REACT JS, REDUX, REACT REDUX</div>
                </div>

const Skillset = () => {
    const [active, setActive] = useState("")

    const handleHover = (skill) => {
        setActive(skill)    
    }
    return (
        <section className="skillset">
            <div className="skill-tv">
            <div className="monitor">
                { active ? jsMsg : initMsg }
            </div>
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