import BookSlot from "./BookSlot";
const Shelf = ({ shelfType, books, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfType}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length !== 0 ? (
            books.map((book) => (
              <BookSlot changeShelf={changeShelf} key={book.id} book={book} />
            ))
          ) : (
            <p>No books yet...</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
