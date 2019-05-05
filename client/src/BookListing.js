import React, { Component } from "react";

class BookListing extends Component {
	
  render() {	 
	return (
		<li><a href="javascript:;" onClick={() => { this.props.clickDeleteBook(this.props.id); }}>[X]</a> <u>{this.props.title}</u> by <strong>{this.props.author}</strong></li>
	);
  }
} 

export default BookListing;
