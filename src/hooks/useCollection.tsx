import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";

//firebase imports 
import { collection, CollectionReference, DocumentData, onSnapshot, Query, query,where, WhereFilterOp } from "firebase/firestore";
import { IBooks } from "../typescript/interface";

export const useCollection = (collectionName: string, _query: [string,WhereFilterOp,string]) => {
    const [document, setDocument] = useState<IBooks['books']>(null)

    const queryArray = useRef(_query).current

    useEffect(() => {
        let ref: CollectionReference<DocumentData>|Query<DocumentData>= collection(db, collectionName)

        if(query){
            ref= query(ref, where(...queryArray))
        }
        const unsub = onSnapshot(ref, (snapshot) => {
            let result: IBooks['books'] = []
            snapshot.docs.forEach(doc => {
                let { name, author, goodReadsUrl } = doc.data();
                result && result.push({ name, author, goodReadsUrl, id: doc.id })
            })
            setDocument(result)
        })

        return () => unsub()
    }, [collectionName, queryArray])

    return { document };
}