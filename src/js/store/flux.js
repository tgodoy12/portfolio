import skillsData from "../assets/skills.json";
import projectsList from "../assets/projects.json";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            skills: [],
            projects: []
        },

        actions: {
            loadSkills: () => {
                setStore({ skills: skillsData.skills });
            },

            loadProjects: async () => {
                await setStore({ projects: projectsList.projects })
            }
        }
    };
};

export default getState;