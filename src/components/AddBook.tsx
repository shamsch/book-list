import { useState } from "react";
import { IBooksAsObject } from "../typescript/interface";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";

export default function AddBook() {
  const {user}=useAuthContext();

  const [formValue, setFormValue] = useState<IBooksAsObject["booksAsObject"]>({
    name: "",
    author: "",
    goodReadsUrl: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormValue({
      name: "",
      author: "",
      goodReadsUrl: ""
    })
    const ref = collection(db, 'books-list')
    await addDoc(ref, {
      ...formValue, uid:user?user.uid:""
    })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Book name</label> <br />
      <input value={formValue.name} onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })} name="name" /> <br />
      <label>Author</label> <br />
      <input value={formValue.author} onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })} name="author" /> <br />
      <label>goodreads link</label> <br />
      <input value={formValue.goodReadsUrl} onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })} name="goodReadsUrl" /> <br />
      <button>Add</button>
    </form>
  );
}
