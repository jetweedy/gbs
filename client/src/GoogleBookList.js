import React, { Component } from "react";
import axios from 'axios';
import GoogleBookListing from './GoogleBookListing.js';

const GoogleBooksApiUri = "https://www.googleapis.com/books/v1/volumes?q=";
const GoogleApiKey = "AIzaSyCsJFGi3_Ouj4HLOTzcIAR45OJeM0kAths";


class GoogleBookList extends Component {
	
  state = {
    books: [],
  };
  
  componentDidMount() {
	console.log(this.props);
//	let q = this.props.match.params.q;
	const params = new URLSearchParams(this.props.location.search); 
	const q = params.get('q');
	axios.get(GoogleBooksApiUri+q+"&key="+GoogleApiKey).then(res => {
		console.log(res.data.items);
		let books = [];
		for (var i in res.data.items) {
			let book = { id: res.data.items[i].id
						, title: res.data.items[i].volumeInfo.title
						, author: res.data.items[i].volumeInfo.authors.join()};		
			books.push(book);
		}
		console.log(books);
		this.setState({ books });
	});
  }	

  addBook = (book) => { 
	console.log("Add book:", book);
	axios.post("/api/books/", {author:book.title, title: book.author}).then(res => {
		console.log(res.data);
	});
  };
	
  clickAddBook = (id) => {
	  var books = [];
	  for (var b in this.state.books) {
		  if (this.state.books[b].id===id) {
			  this.addBook(this.state.books[b]);
		  } else {
			  books.push(this.state.books[b]);
		  }
	  }
	  this.setState({books});
	  
  };
	
  render() {	 
	return (
		<div>
		<h1>Book Search Results</h1>
		<ul>
			{this.state.books.map(book => (
			  <GoogleBookListing
				id = {book.id}
				key = {book.id}
				clickAddBook={this.clickAddBook}
				title={book.title}
				author={book.author}
			  />
			))}			
		</ul>
		</div>
	);
  }
}

export default GoogleBookList;
