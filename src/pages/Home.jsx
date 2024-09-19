import "./Home.css";
import Sid from '../assets/sid.png'

const Home = () => {
    return (
        <div className = "home">

            <div className = "introDiv">
                <h1 className = "nameArea">Hi! I'm Sid</h1>
                <p className = "introParagraph">I'm a Mathematics & Computer Science student at the University of Illinois at Urbana-Champaign</p>
            </div>

            <div className = "personalLinks">
                <ul>
                    <button onClick = {() => window.open("https://github.com/sdayaneni", '_blank', 'noopener, noreferrer')} className = "Link-button fa fa-brands fa-github" href = "https://github.com/SidD11111"/>
                    <button onClick = {() => window.open("", '_blank', 'noopener, noreferrer')} className = "Link-button fa fa-brands fa-linkedin" href = ""/>
                    <button onClick = {() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=siddharth.dayaneni@gmail.com", '_blank', 'noopener, noreferrer')} className = "Link-button fa fa-brands fa-envelope" href = "https://mail.google.com/mail/?view=cm&fs=1&to=siddharth.dayaneni@gmail.com"/>

                </ul>
            </div>

            <div className = "introPictureDiv">
                <img src = {Sid} className = 'picOfMe'></img>
            </div>

            {/* <h3>
                <div id = 'arrow1' className="scroll-more">↓</div>

                <div id = 'arrow2' className="scroll-more">↓</div>
            </h3> */}
        </div>
    );
}

export default Home;