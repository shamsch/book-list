import { useEffect, useState } from "react";
import { db } from "../firebase/config";

//firebase imports 
import { collection, onSnapshot } from "firebase/firestore";
import { IBooks } from "../typescript/interface";

export const useCollection = (collectionName: string) => {
    const [document, setDocument] = useState<IBooks['books']>(null)

    useEffect(() => {
        let ref = collection(db, collectionName)

        const unsub = onSnapshot(ref, (snapshot) => {
            let result: IBooks['books'] = []
            snapshot.docs.forEach(doc => {
                let { name, author, goodReadsUrl } = doc.data();
                result && result.push({ name, author, goodReadsUrl, id: doc.id })
            })
            setDocument(result)
        })

        return () => unsub()
    }, [collectionName])

    return { document };
}