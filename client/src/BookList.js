import React, { Component } from "react";
import axios from 'axios';
import BookListing from './BookListing.js';

class BookList extends Component {
	
  state = {
    books: [],
  };

  componentDidMount() {
	console.log(this.props);
//	let q = this.props.match.params.q;
	const params = new URLSearchParams(this.props.location.search); 
	const q = params.get('q');
	axios.get("/api/books/").then(res => {
		console.log(res.data);
		let books = [];
		for (var i in res.data) {
			let book = { id: res.data[i]._id
						, title: res.data[i].title
						, author: res.data[i].author
			};
			books.push(book);
		}
		console.log(books);
		this.setState({ books });
	});
  }	
  

  deleteBook = (book) => { 
	console.log("Delete book:", book);
	axios.delete("/api/books/"+book.id, {id: book.id}).then(res => {
		console.log(res.data);
	});
  };
	
  clickDeleteBook = (id) => {
	  var books = [];
	  for (var b in this.state.books) {
		  if (this.state.books[b].id==id) {
			  this.deleteBook(this.state.books[b]);
		  } else {
			  books.push(this.state.books[b]);
		  }
	  }
	  this.setState({books});
	  
  };
	
  render() {	 
	return (
		<div>
		<h1>Saved Books</h1>
		<ul>
			{this.state.books.map(book => (
			  <BookListing
				id = {book.id}
				key = {book.id}
				clickDeleteBook={this.clickDeleteBook}
				title={book.title}
				author={book.author}
			  />
			))}			
		</ul>
		</div>
	);
  }
}

export default BookList;
