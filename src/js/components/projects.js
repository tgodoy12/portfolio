import React, { useContext, useEffect } from "react"; // A

import { Context } from "../store/appContext";
import ProjectCard from "./projectCard";


const Projects = () => {

    const { store, actions } = useContext(Context);
    console.log(store.projects);
    
    useEffect(() => {
        actions.loadProjects();
        // eslint-disable-next-line
    }, []);
//
    return (
        <div className="min-h-screen bg-[#000000] flex flex-col justify-center mx-auto px-24 sm:px-32 lg:px-20 xl:px-48 2xl:px-[28rem] py-10">
            
            <div className="title text-3xl mb-24">
                Projects
            </div>

            <div className="
                grid grid-cols-1 gap-8
                justify-items-center
                lg:grid-cols-2 
                ">
                {store.projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        name={project.name}
                        description={project.description}
                        tools={project.tools}
                        image="https://picsum.photos/500/600"
                    />
                ))}
            </div>



        </div>
    )
}

export default Projects;