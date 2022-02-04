import { User } from "firebase/auth";
import React, { useReducer, createContext } from "react";
import { IContext } from "../typescript/interface";

export const authContext = createContext<IContext | null>(null)


export type Action = {
    type: 'SIGN_IN' | 'SIGN_OUT' ,
    payload: User | null
}

type State = {
    user: User | null
}

export const authReducer = (state:State, {type,payload}: Action) => {
    switch (type) {
        case 'SIGN_IN':
            return { ...state, user: payload }
        case 'SIGN_OUT':
            return { ...state, user: payload }
        default:
            return state
    }
}

export const AuthContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    }
    )


    return (
        <authContext.Provider value={{ ...state, dispatch }}>
            {children}
        </authContext.Provider>
    )

}
