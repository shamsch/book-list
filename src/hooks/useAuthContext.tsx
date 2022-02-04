import { authContext } from "../context/authContext";
import { useContext } from "react";

export const useAuthContext= () => {
    const context = useContext(authContext)

    //this checks if we are using outside the scope of the context 
    if(!context){
        throw Error('outside of scope')
    }

    return context 
} 