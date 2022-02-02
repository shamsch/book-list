import { IBooks } from "../typescript/interface";

const BookList:React.FC<IBooks> = ({books}) => {

  return (
    <div>
      {books.map((book:any) => {
        return (
          <div key={book.id}>
            <h3>{book.name}</h3>
            <p>{book.author}</p>
            <a href={book.goodReadsUrl}>Goodread page</a>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
