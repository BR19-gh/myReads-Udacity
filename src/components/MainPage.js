import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const MainPage = ({ books, SHELF_TYPES, changeShelf }) => {
  const filterBooks = (books, shelfType) => {
    return books.filter((book) => book.shelf === shelfType);
  };

  const shelfTypeText = (shelfType) => {
    switch (shelfType) {
      case "currentlyReading":
        return "Currently Reading";
      case "wantToRead":
        return "Want to Read";
      case "read":
        return "Read";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {SHELF_TYPES.map((shelfType) => (
            <Shelf
              changeShelf={changeShelf}
              key={shelfType}
              shelfType={shelfTypeText(shelfType)}
              books={filterBooks(books, shelfType)}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
