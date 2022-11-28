import React, { useState } from "react";
import {Link} from 'react-scroll';
import './Navigation.css';


function Navigation () {

    const [isActive, setActive] = useState(true);
    
    const toggleClass = () => { setActive(!isActive); };

    return (
        
        <div>

            <nav className = "navBar">

                <div>

                    <div className = "menu">

                        <ul className = "pageLinks">
                            <li className = "navBarEntry"><Link activeClass = "active" to = 'projects-header' smooth = {true} offset = {-70}  duration = {750}  className = "link"> My Projects </Link></li>
                            <li className = "navBarEntry"><Link activeClass = "active" to = 'experienceDiv' smooth = {true} offset = {-70}  duration = {1000}  className = "link"> Experience </Link></li>
                            <li className = "navBarEntry"><Link activeClass = "active" to = 'aboutMeDiv' smooth = {true} offset = {-70}  duration = {1000}  className = "link"> About Me </Link></li>
                            <li className = "navBarEntry"><Link activeClass = "active" to = 'home' smooth = {true} offset = {-70}  duration = {750}  className = "link"> Home </Link></li>
                        </ul>

                    </div>

                </div>

            </nav>

            <button className = "menuButton" onClick = {toggleClass}>

                        <span className = "buttonLine"></span>
                        <span className = "buttonLine"></span>
                        <span className = "buttonLine"></span>

            </button>

            <div className = {isActive ? "mobileMenuSection" : null}>
                
                <nav className = "mobileNavBar">

                    <ul className = "doNothing">
                        <li className = "mobileNavBarEntry"><Link onClick = {toggleClass} activeClass = "active" to = 'home' smooth = {true} offset = {-70}  duration = {750}  className = "mobileLink"> Home </Link></li>
                        <li className = "mobileNavBarEntry"><Link onClick = {toggleClass} activeClass = "active" to = 'aboutMeDiv' smooth = {true} offset = {-70}  duration = {1000}  className = "mobileLink"> About Me </Link></li>
                        <li className = "mobileNavBarEntry"><Link onClick = {toggleClass} activeClass = "active" to = 'experienceDiv' smooth = {true} offset = {-70}  duration = {1000}  className = "mobileLink"> Experience </Link></li>
                        <li className = "mobileNavBarEntry"><Link onClick = {toggleClass} activeClass = "active" to = 'projects-header' smooth = {true} offset = {-70}  duration = {750}  className = "mobileLink"> My Projects </Link></li>

                    </ul>

                </nav>
            </div>

        </div>
    );
}

export default Navigation;