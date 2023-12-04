import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
// Importieren Sie weitere Komponenten, die Sie benötigen

function App() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				{/* Fügen Sie hier weitere Links hinzu, falls benötigt */}
			</nav>
			<Route path="/" exact component={ProductList} />
			{/* Fügen Sie hier weitere Routen hinzu, falls benötigt */}
		</div>
	);
}

export default App;
