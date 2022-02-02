//components
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import { useCollection } from "../hooks/useCollection";

//typescript
import { IBooks } from "../typescript/interface";

export default function Home() {
  const {document}= useCollection("books-list")

  return (
    <div>
      <BookList books={document} />
      <AddBook />
    </div>
  );
}
