import "./Project.css";

const Project = (props) => {
    return (
        <div className = "project-div">

        <div style={{ backgroundImage: `url(${props.img})` }} className="projectImage" />

            <div className = "descriptionSection">
                <h1 className = "project-name">{props.name}</h1>
                <p className = "descriptionParagraph">{props.description}</p>
                <button onClick = {() => window.open(props.link, '_blank', 'noopener, noreferrer')} id = 'linkToRepo' className = "Link-button fa fa-brands fa-github" href = {props.link}/>
            </div>
        </div>
    );
}

export default Project;