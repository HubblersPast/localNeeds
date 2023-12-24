import React from 'react';
import ProductList from './ProductList';

const App = () => {
	const products = [
		{
			id: 1,
			name: 'Product 1',
			description: 'This is product 1',
			price: 100
		},
		{
			id: 2,
			name: 'Product 2',
			description: 'This is product 2',
			price: 200
		}
		// Add more products as needed
	];

	return (
		<div>
			<h1>My Product List</h1>
			<ProductList products={products} />
		</div>
	);
};

export default App;
