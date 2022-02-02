//components
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";

//typescript
import { IBooks } from "../typescript/interface";

export default function Home() {
  const dummyData: IBooks["books"] = [
    {
      name: "lord of the rings",
      author: "tolkeins",
      id: "1",
      goodReadsUrl:
        "https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings",
    },
    {
      name: "harry potter",
      author: "jk rowling",
      id: "2",
      goodReadsUrl: "https://www.goodreads.com/series/45175-harry-potter",
    },
  ];

  return (
    <div>
      <BookList books={dummyData} />
      <AddBook />
    </div>
  );
}
