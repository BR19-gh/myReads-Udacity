import { Link } from "react-router-dom";
import BookSlot from "./BookSlot";
import { search } from "../BooksAPI";
import { useEffect, useState } from "react";

const SearchBooks = ({ books, changeShelf }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [textIfNoResult, setTextIfNoResult] = useState("No Results Found");

  const searchBooks = (query) => {
    if (query.length > 0) {
      search(query, 20).then((books) => {
        setSearchResults(books);

        if (document.querySelector("#searchInput").value === "") {
          setTextIfNoResult("");
          setSearchResults([]);
        } else {
          setTextIfNoResult("No Results Found");
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  const mergeResultsWithBooks = () => {
    return searchResults.map((searchBook) => {
      const existingBook = books.find((book) => book.id === searchBook.id);
      if (existingBook) {
        return { ...searchBook, shelf: existingBook.shelf };
      } else {
        return searchBook;
      }
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            id="searchInput"
            onChange={(e) => {
              searchBooks(e.target.value);
            }}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {(typeof searchResults === "object" &&
            !Array.isArray(searchResults) &&
            searchResults !== null) ||
          searchResults === "" ? (
            <p>{textIfNoResult}</p>
          ) : (
            mergeResultsWithBooks().map((book) => (
              <BookSlot changeShelf={changeShelf} key={book.id} book={book} />
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
