import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/skillsCarousel.css"

const SkillsCarousel = () => {

    const { store, actions } = useContext(Context);


    useEffect(() => {
        if (store.skills.length === 0) {
            actions.loadSkills();  // Asegúrate de que `loadSkills` esté bien configurado en tu flux.
        }
    }, [store.skills.length, actions])

    return (
        <div className="min-h-1/2vh content-center">
            <div className="flex justify-center">
                {store.skills.length > 0 ? (
                    store.skills.map((skill, index) => (
                        <img 
                            className="icon-img" 
                            src={skill.src} 
                            alt={skill.name} 
                            key={index} 
                            title={skill.name} // Puedes agregar un tooltip con el nombre de la skill
                        />
                    ))
                ) : (
                    <p>Loading skills...</p> // Puedes mostrar un mensaje de carga mientras se cargan las skills.
                )}
            </div>
        </div>
    )
}

export default SkillsCarousel;