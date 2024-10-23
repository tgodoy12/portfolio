import React, { useState } from "react";
import "../../styles/projectCard.css"
import Button from "./button";

const ProjectCard = (props) => {

    const [seeInfo, setSeeInfo] = useState(false);

    return (
        <div className="p-5
            border-2 border-[--color-mint] rounded-lg">

            <div 
            className="project-card rounded-lg
                max-w-80 min-w-48
                md:max-w-full
                relative overflow-hidden"
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
                <div className={`relative z-10 flex flex-col 
                    justify-center items-center backdrop-brightness-125
                    p-10 h-full
                    transition-opacity duration-300 ${seeInfo ? 'opacity-100' : 'opacity-0'}`}>
                    
                    <div className="project-title 
                        mb-2 
                        text-center text-[--color-mint] font-semibold">
                        {props.name}
                    </div>

                    <div className="description 
                        text-center text-[--color-darkest]">
                        {props.description}
                    </div>

                    <div className="buttons mt-4 flex justify-center gap-4">
                            <Button 
                                className="btn-code p-1
                                    border-2 border-[--color-mint] rounded-md
                                    shadow-lg hover:shadow-[--color-mint]
                                    hover:bg-[--color-mint]"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5">
                                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
                                    </svg>
                                }
                            />

                            <Button 
                                className="btn-code p-1
                                border-2 border-[--color-mint] rounded-md
                                shadow-lg hover:shadow-[--color-mint]
                                hover:bg-[--color-mint]"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="size-5">
                                    <path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 14.899 14.899 0 0 1 1.663 4.472 8.547 8.547 0 0 0 1.84-1.662ZM13.326 7.825a13.43 13.43 0 0 0-2.413-5.773 8.087 8.087 0 0 0-1.826 0 13.43 13.43 0 0 0-2.413 5.773A8.473 8.473 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675ZM6.514 9.376A9.98 9.98 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 0 1-.351 3.759A13.54 13.54 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 0 1-.352-3.758ZM5.285 7.074a14.9 14.9 0 0 1 1.663-4.471 8.028 8.028 0 0 0-3.503 2.81c.529.638 1.149 1.199 1.84 1.66ZM17.334 6.798a7.973 7.973 0 0 1 .614 4.115 13.47 13.47 0 0 1-3.178 1.72 15.093 15.093 0 0 0 .174-3.939 10.043 10.043 0 0 0 2.39-1.896ZM2.666 6.798a10.042 10.042 0 0 0 2.39 1.896 15.196 15.196 0 0 0 .174 3.94 13.472 13.472 0 0 1-3.178-1.72 7.973 7.973 0 0 1 .615-4.115ZM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 0 1-1.72 3.178 8.099 8.099 0 0 1-1.826 0 13.47 13.47 0 0 1-1.72-3.178c.855.151 1.735.23 2.633.23ZM14.357 14.357a14.912 14.912 0 0 1-1.305 3.04 8.027 8.027 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305ZM6.948 17.397a8.027 8.027 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 0 0 1.305 3.04Z" />
                                  </svg>
                                }
                            />

                            <Button 
                                className="btn-code p-1
                                border-2 border-[--color-mint] rounded-md
                                shadow-lg hover:shadow-[--color-mint]
                                hover:bg-[--color-mint]"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="size-5">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                                    </svg>
                                }
                            />
                        
                        </div>

                </div>


            </div>

        </div>
        
    )
}

export default ProjectCard;