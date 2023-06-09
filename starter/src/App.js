import "./App.css";
import Search from "./Search.js"
import BookList from "./BookList.js"
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import * as BooksAPI from './BooksAPI'

const App = () => {
  useEffect(() => {
    BooksAPI.getAll()
      .then(books => {
        setBooks(books)
      });
  }, []);

  const [books, setBooks] = useState([]);
  const updateBookshelf = (selectedBook, s) => {

    console.log("shelf", s);
    BooksAPI.update(selectedBook, s).then((res) => {
      selectedBook.shelf = s;
      this.setState((currentState) => ({
        books: currentState.books.filter((b) => {
          return b.id !== selectedBook.id;
        }).concat([selectedBook]),
      }));
      console.log('shelf updated', books);
    });
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<BookList updateBookshelf={updateBookshelf} />} />
          <Route path="/search" element={<Search listedBooks={books} updateBookshelf={updateBookshelf} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
