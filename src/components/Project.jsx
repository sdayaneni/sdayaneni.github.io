import "./Project.css";

const Project = (props) => {
    return (
        <div className = "project-div">

        <div style={{ backgroundImage: `url(${props.img})` }} className="projectImage" />

            <div className = "descriptionSection">
                <h1 className = "project-name">{props.name}</h1>
                <p className = "descriptionParagraph">{props.description}</p>
            </div>

        </div>
    );
}

export default Project;