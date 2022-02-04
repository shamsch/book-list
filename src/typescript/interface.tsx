//all interfaces used in this application are defined here

import { User } from "firebase/auth";
import React, { Dispatch } from "react";
import { Action } from "../context/authContext";

export interface IBooks{
    books: {
        name: string;
        author: string;
        id: string;
        goodReadsUrl: string;
    }[] | null,
}

export interface IBooksAsObject{
    booksAsObject:{
        name: string;
        author: string;
        goodReadsUrl: string;
    }
}

export interface IContext{
    user: User|null;
    dispatch:React.Dispatch<Action>
}