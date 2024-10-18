import React from "react";
import "../../styles/projectCard.css"

const ProjectCard = (props) => {
    return (
        <div className="project-card border border-amber-50
            max-w-80 min-w-48
            md:max-w-full
            2xl:max-w-80"
            
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover', // Asegura que la imagen cubra todo el área
                backgroundPosition: 'center', // Centra la imagen
            }}
            >
            
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