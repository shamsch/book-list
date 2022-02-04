//components
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";

//hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

//typescript
import { IBooks } from "../typescript/interface";

export default function Home() {
  const {user} = useAuthContext()
  const {document}= useCollection("books-list", ["uid", "==", user?user.uid:"" ])

  return (
    <div>
      <BookList books={document} />
      <AddBook />
    </div>
  );
}
