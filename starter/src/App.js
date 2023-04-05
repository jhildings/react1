import "./App.css";

import Search from "./Search.js"
import BookList from "./BookList.js"

import React from 'react'
import { Route, Routes, BrowserRouter  } from "react-router-dom";

import * as BooksAPI from './BooksAPI'
class App extends React.Component {

  state = { 
    showSearchPage: false,
    setShowSearchpage: false,
    books: [],
    foundBooks: [] 
  };

    componentDidMount() {
      BooksAPI.getAll()
        .then( books => {
          this.setState({books})
        }); 
  
      console.log("Books", this.state.books); 
    }


    updateBookshelf = (selectedBook, s) => {
      
      console.log("shelf",s); 
      BooksAPI.update(selectedBook,s).then((res) => {
        selectedBook.shelf = s; 
        this.setState((currentState) => ({
          books: currentState.books.filter((b) => {
            return b.id !== selectedBook.id;
          }).concat([selectedBook]),
        }));
        console.log('shelf updated', this.state.books);
      });
    };
    setShowSearchpage = (p) => {
      this.setState({showSearchPage: !p});
    }  

  render() {  
  
    return (
      <BrowserRouter>

    <div className="app">
       <Routes>
          <Route path="/" element={<BookList updateBookshelf={this.updateBookshelf}/>} />
          <Route path="/search" element={<Search listedBooks={this.state.books} updateBookshelf={this.updateBookshelf} />} />
        </Routes>
    </div>
    </BrowserRouter>

  );
}
}

export default App;
