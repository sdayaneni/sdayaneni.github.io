import "./Home.css";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";

const Home = () => {
    return (
        <div className = "home">

            <div className = "introDiv">
                <h1 className = "nameArea">Hi! I'm Sid</h1>
                <p className = "introParagraph">I'm a High School Junior With a Passion for Programming, Specifically in the Field of Data Science and Machine Learning.</p>
            </div>

            <div className = "personalLinks">
                <script src="https://kit.fontawesome.com/6f88151548.js" crossOrigin = "anonymous"></script>

                <ul>
                    <button onClick = {() => window.open("https://github.com/SidD11111", '_blank', 'noopener, noreferrer')} className = "Link-button fa fa-brands fa-github" href = "https://github.com/SidD11111"/>
                    <button onClick = {() => window.open("", '_blank', 'noopener, noreferrer')} className = "Link-button fa fa-brands fa-linkedin" href = ""/>
                    <button onClick = {() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=siddharth.dayaneni@gmail.com", '_blank', 'noopener, noreferrer')} className = "Link-button fa fa-brands fa-envelope" href = "https://mail.google.com/mail/?view=cm&fs=1&to=siddharth.dayaneni@gmail.com"/>

                </ul>
            </div>

            <div className = "introPictureDiv">
                <p>picture goes here</p>
            </div>

            <h3>
                <div className="scroll-more">↓</div>
            </h3>
        </div>
    );
}

export default Home;