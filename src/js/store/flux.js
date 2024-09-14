const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            item1: null,
            item2: {},
            item3: ["hola", "mundo"],
        },

        actions: {
            exampleFunction: () => {
                console.log("This is an example function");
            }
        }
    };
};

export default getState;