import React, { Component } from "react";

class GoogleBookListing extends Component {
	
  render() {	 
	return (
		<li><a href="javascript:;" onClick={() => { this.props.clickAddBook(this.props.id); }}>[+]</a> <u>{this.props.title}</u> by <strong>{this.props.author}</strong></li>
	);
  }
}

export default GoogleBookListing;
