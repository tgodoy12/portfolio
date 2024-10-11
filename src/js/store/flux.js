import skillsData from "../assets/skills.json"; // Ajusta la ruta según tu estructura

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            skills: []
        },

        actions: {
            loadSkills: () => {
                setStore({ skills: skillsData.skills });
            }
        }
    };
};

export default getState;