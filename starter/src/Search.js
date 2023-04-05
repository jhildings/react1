import React,  { useState } from 'react'; 
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom";
import Book from "./Book.js";

const Search = ({
  updateBookshelf,
  listedBooks
}) =>
 
{
const [foundBooks , setFbooks] = useState([]);
const [searchInput, setSearchInput] = useState('');

const findBook = (b) => {
  b.persist();
  setSearchInput(b.target.value)
  console.log(listedBooks)
  let foundBooks = []
  BooksAPI.search(searchInput).then((results) => {
  if(results != null && results.length > 1 && b.target.value.length > 1){
    results.map((foundBook) => {
      //How to find the book and mark it? I get undefined error
      let bookExist = listedBooks.find(book => book.id === foundBook.id);
        if(bookExist){
          console.log('yes', foundBook.id)
          foundBook.shelf = listedBooks[foundBook.id]
        //  foundBooks.push(foundBook)
        }
        else {
         // foundBooks.push(foundBook)
          console.log('noo', foundBook)
        }
        foundBooks.push(foundBook)

      setFbooks(foundBooks)

  });
  }

  });
}
      return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"  className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={findBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
                        {foundBooks.length > 1 && foundBooks.map((book) => 
                            book.imageLinks ?
                            <Book book={book} updateBookshelf={updateBookshelf} />                          
                            : null
                )}
          </ol>
          {foundBooks.length === 0 ? <div><h2>Search for books</h2></div> : null}
        </div>
      </div>);
    }
export default Search;
