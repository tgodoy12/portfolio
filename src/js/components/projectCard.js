import React from "react";

const ProjectCard = (props) => {
    return (
        <div className="border border-amber-50 h-48 w-full min-w-40">
            
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