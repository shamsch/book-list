import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { IBooks } from "../typescript/interface";

const BookList: React.FC<IBooks> = ({ books }) => {
  const handleDelete = async (id: string) => {
    const ref = doc(db, 'books-list', id)
    await deleteDoc(ref)
  }

  return (
    <>
      {books && books.map((book) => {
        return (
          <div key={book.id}>
            <h3>{book.name}</h3>
            <p>{book.author}</p>
            <a href={book.goodReadsUrl}>✨ GoodReads link</a>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        )
      })
      }
    </>
  );
};

export default BookList;
