import './Experience.css';
import Showcase from '../components/Showcase';

import Python from '../assets/python.png';
import JavaScript from '../assets/javascript.png';
import Java from '../assets/java.png';
import Cpp from '../assets/cpp.png';
import React from '../assets/reactjs.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    return (
        <div className = 'experienceDiv'>
            <p className = 'header'>Experience</p>
            <p className = "description">I Have Experience Working With the Following Languages + Frameworks!</p>

            <div data-aos = 'fade-up' data-aos-duration = '1500' className = 'allShowcases'>
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