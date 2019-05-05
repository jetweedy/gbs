import React from 'react';
// import ReactDOM from 'react-dom'
// import { Route } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Home from './Home.js'
import BookList from './BookList.js'
import GoogleBookList from './GoogleBookList.js'

function App() {
	return (
		<div>
		<form method="get" action="/books/search">
			<p>
			Search Books: &nbsp; 
			<input type="text" name="q" />
			<input type="submit" value="Search" />
			&nbsp; | &nbsp;
			<a href="/books/list">Saved Books</a>
			</p>
		</form>
		<hr />
		<Router>
		  <div>
			<Switch>
			  <Route exact path="/books/search" component={GoogleBookList} />
			  <Route exact path="/books/list" component={BookList} />
			  <Route exact path="*" component={Home} />
			</Switch>
		  </div>
		</Router>
		</div>
	);
}

export default App;
