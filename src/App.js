import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import MainPage from "./components/MainPage";
import { useState, useEffect } from "react";
import { getAll, update } from "./BooksAPI";

const SHELF_TYPES = ["currentlyReading", "wantToRead", "read"];

function App() {
  const [books, setBooks] = useState([]);

  const changeShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      getAll().then((books) => {
        const booksCopy = [...books];

        setBooks(booksCopy);
      });
    });
  };

  useEffect(() => {
    getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <MainPage
            changeShelf={changeShelf}
            SHELF_TYPES={SHELF_TYPES}
            books={books}
          />
        }
      />
      <Route
        path="/search"
        element={<SearchBooks books={books} changeShelf={changeShelf} />}
      />
    </Routes>
  );
}

export default App;
