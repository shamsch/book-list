import { useEffect, useState } from "react";

//components
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";

//typescript
import { IBooks } from "../typescript/interface";

export default function Home() {
  const [books, setBooks] = useState<IBooks["books"] | null>(null);

  useEffect(()=>{

  },[])

  return (
    <div>
      <BookList books={books} />
      <AddBook />
    </div>
  );
}
