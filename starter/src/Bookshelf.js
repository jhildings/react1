import React from "react";
import Book from "./Book.js";

const Bookshelf = ({title, books, updateBookshelf}) =>
 
   {
      return (
      <div className="bookshelf">
                      <h2 className="bookshelf-title">{title}</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">                       
                          {books.map((book) => 
                            <li key={book.id}>
                             <Book book={book} updateBookshelf={updateBookshelf} />    
                             </li>                      
                          )}
                        </ol>
                      </div>
                    </div>);
                    }
  export default Bookshelf;
