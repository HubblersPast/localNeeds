import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProductList from './ProductList.js';

function App() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<Route path="/" exact component={ProductList} />
		</div>
	);
}

export default App;
