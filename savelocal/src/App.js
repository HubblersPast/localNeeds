// App.js
import React from 'react';
import HeroSection from './HeroSection';
import ProductList from './ProductList';
import products from './Products'; // Import products here
import './App.css';

const App = () => {
	return (
		<div>
			<HeroSection />
			<h1>My Product List</h1>
			<ProductList products={products} />
		</div>
	);
};

export default App;
