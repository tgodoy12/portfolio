import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Landing = () => {
    const { store } = useContext(Context);

    return(
        <div className="min-h-screen bg-emerald-100 flex flex-col items-center justify-center">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-center">This is the landing page</h1>
            </div>
            <div>
                <h1>{store.item3[0]} {store.item3[1]}</h1>
            </div>
        </div>   
    )
}

export default Landing;