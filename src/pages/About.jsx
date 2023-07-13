import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        Aos.init({});
    });

    return (
        <div className = 'aboutMeDiv'>
            <p className = "header">
                About Me
            </p>

            <p data-aos = 'fade-up' data-aos-duration = '1500' className = 'description'>
               I'm a 17 year old high school student, who's studying computer science. Specifically, I'm interested in machine learning and it's applications in natural language processing. Aside from programming, I play basketball, and am a part of my school's math and debate teams. In my free time, though I enjoy watching college football.

            </p>
        </div>
    );
}

export default About;