import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/skillsCarousel.css";

const SkillsCarousel = () => {
    const { store, actions } = useContext(Context);
    const carouselRef = useRef(null);

    useEffect(() => {
        if (store.skills.length === 0) {
            actions.loadSkills();
        }

        const carousel = carouselRef.current;
        let scrollInterval;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (carousel) {
                    carousel.scrollBy({ left: 1, behavior: "smooth" });
                }
            }, 10); // Controla la velocidad del desplazamiento
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        carousel.addEventListener("mouseover", stopAutoScroll);
        carousel.addEventListener("mouseout", startAutoScroll);

        startAutoScroll();

        return () => {
            carousel.removeEventListener("mouseover", stopAutoScroll);
            carousel.removeEventListener("mouseout", startAutoScroll);
            stopAutoScroll();
        };
    }, [store.skills.length, actions]);

    // Función para duplicar las skills y lograr el carrusel infinito
    const getInfiniteSkills = () => {
        return [...store.skills, ...store.skills]; // Duplica las skills
    };

    return (
        <div className="bg-[#FBFBFF] px-11">
            <div
                ref={carouselRef}
                className="flex overflow-x-scroll no-scrollbar gap-6 p-4"
                style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
            >
                {getInfiniteSkills().length > 0 ? (
                    getInfiniteSkills().map((skill, index) => (
                        <div key={index} className="flex-shrink-0 w-24 h-24">
                            <img
                                className="w-full h-full object-contain transition-transform transform hover:scale-110 duration-300"
                                src={skill.src}
                                alt={skill.name}
                                title={skill.name} // Tooltip con el nombre de la skill
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading skills...</p>
                )}
            </div>
        </div>
    );
};


export default SkillsCarousel;