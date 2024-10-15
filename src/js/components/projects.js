import React from "react";
// import PolygonTop from "./polygonTop";
import ProjectCard from "./projectCard";


const Projects = () => {

    return (
        <div className=" min-h-screen bg-[#000000] mx-auto px-6 sm:px-10 lg:px-24 xl:px-36">
            {/* <PolygonTop/> */}

            <div class="
                grid grid-cols-1 gap-4
                md:grid-cols-2 
                xl:grid-cols-3">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>



        </div>
    )
}

export default Projects;