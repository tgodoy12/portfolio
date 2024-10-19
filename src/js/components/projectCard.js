import React, { useState } from "react";
import "../../styles/projectCard.css"

const ProjectCard = (props) => {

    const [seeInfo, setSeeInfo] = useState(false);

    return (
        <div 
            className="project-card rounded-lg
                max-w-80 min-w-48
                md:max-w-full
                p-10 relative overflow-hidden"
            onMouseEnter={() => setSeeInfo(true)}
            onMouseLeave={() => setSeeInfo(false)}
            style={{
                height: '18rem'
            }}
        >
            {/* Fondo de la imagen */}
            <div 
                className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-filter duration-100 ${seeInfo ? 'blur-md' : ''}`}
                style={{
                    backgroundImage: `url(${props.image})`,
                }}
            />

            {/* Contenido del proyecto */}
            <div className={`relative z-10 flex flex-col justify-center 
                transition-opacity duration-300 ${seeInfo ? 'opacity-100' : 'opacity-0'}`}>
                
                <div className="project-title mb-2 text-center text-white">
                    {props.name}
                </div>

                <div className="description text-justify text-white">
                    {props.description}
                </div>

                {seeInfo && (
                   
                    <div className="buttons mt-4 flex justify-center gap-4">
                        <button className="btn-info
                            border border-color-darkest rounded-md
                            p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>


                        </button>
                        <button className="btn-demo
                            border border-color-darkest rounded-md
                            p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>

                        </button>
                        <button className="btn-code
                            border border-color-darkest rounded-md
                            p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
    
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;