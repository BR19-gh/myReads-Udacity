import React, { useState } from "react";
import Modal from "./Modal";

const BookSlot = ({ book, changeShelf }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = () => {
    setIsModalOpen(true);
  };
  console.log(book);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks && book.imageLinks.thumbnail
                ? book.imageLinks.thumbnail
                : "https://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf ? book.shelf : "none"}
            onChange={(e) => {
              changeShelf(book, e.target.value);
            }}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="book-shelf-details" onClick={handleDetailsClick}>
          Details
        </div>
        {isModalOpen && (
          <Modal book={book} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default BookSlot;
