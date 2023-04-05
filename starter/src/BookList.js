import "./App.css";
import Bookshelf from "./Bookshelf.js";
import React,  { useState , useEffect} from 'react'; 
import { Link } from "react-router-dom";

import * as BooksAPI from './BooksAPI'
const BookList  =

  ({
    foundBooks,
    updateBookshelf
  }) =>
  {
    const [books , setBooks] = useState([]);
    useEffect(() => {
      BooksAPI.getAll()
      .then( books => {
        setBooks(books)
      }); 
      return () => true;
    }, [])

    return (
    <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>Johannes read and wanted books</h1>
          </div>
          <div className="list-books-content">
            <div>      
              <Bookshelf title='Currently Reading' books={books.filter((book) => book.shelf === 'currentlyReading')} updateBookshelf={updateBookshelf}/>
              <Bookshelf title='Want to Read' books={books.filter((book) => book.shelf === 'wantToRead')} updateBookshelf={updateBookshelf}/>
              <Bookshelf title='Read' books={books.filter((book) => book.shelf === 'read')} updateBookshelf={updateBookshelf}/>
            </div>
          </div>
          <div className="open-search">
          <Link to="/search">Add a book</Link>
          </div>
        </div>
    </div>
  );

}

export default BookList;
