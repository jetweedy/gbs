import React from 'react';
// import ReactDOM from 'react-dom'
// import { Route } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Home from './Home.js'
import GoogleBookList from './GoogleBookList.js'

function App() {
	return (
		<Router>
		  <div>
			<Switch>
			  <Route exact path="/books/search/:q" component={GoogleBookList} />
			  <Route exact path="*" component={Home} />
			</Switch>
		  </div>
		</Router>
	);
}

export default App;
