const BookSlot = ({ book, changeShelf }) => {
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
                : "https://lgimages.s3.amazonaws.com/nc-sm.gif"
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf}
            onChange={(e) => {
              changeShelf(book, e.target.value);
            }}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option selected value="none">
              None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default BookSlot;
