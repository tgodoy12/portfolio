import React from "react";
import "../../styles/projectCard.css"

const ProjectCard = (props) => {
    return (
        <div className="project-card border border-amber-50 w-full min-w-40">
            
            <div className="title">
                {props.name}
            </div>

            <div className="description text-sky-50">
                {props.description}
            </div>

        </div>
    )
}

export default ProjectCard;