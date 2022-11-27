import './Showcase.css';



const Showcase = (props) => {
    return (
        <div className = 'showcaseDiv'>
            <img className = 'showcaseImg' src = {props.img}></img>
            <p className = 'showcaseName'>{props.name}</p>
        </div>
    );
}

export default Showcase;