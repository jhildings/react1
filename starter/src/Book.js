import React from "react";

const Book = ({ book, updateBookshelf }) => {

  
  return (
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                    `url(${book.imageLinks.smallThumbnail})`
                }}
              ></div>
              <div className="book-shelf-changer" >
                <select onChange={(e) => updateBookshelf(book, e.target.value)} defaultValue={book.shelf || 'none'}>
                  <option disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">  Currently Reading </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title"><b>{book.title}</b></div>
            <div className="book-authors"><b>{book.authors ? book.authors[0] : "no author"}</b></div>
          </div>
  );
}
export default Book;
