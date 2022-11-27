import './Experience.css';
import Showcase from '../components/Showcase';

import Python from '../assets/python.png';
import JavaScript from '../assets/javascript.png';
import Java from '../assets/java.png';
import Cpp from '../assets/cpp.png';
import React from '../assets/reactjs.png';

const Experience = () => {
    return (
        <div className = 'experienceDiv'>
            <p className = 'header'>Experience</p>
            <p className = "description">I Have Experience Working With the Following Languages + Frameworks!</p>

            <div className = 'allShowcases'>
                <Showcase name = "Python" img = {Python}/>
                <Showcase name = "JavaScript" img = {JavaScript}/>
                <Showcase name = "Java" img = {Java}/>
                <Showcase name = "C++" img = {Cpp}/>
                <Showcase name = "React.js" img = {React}/>
            </div>

        </div>
    );
}

export default Experience;