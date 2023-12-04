import React from 'react';
import './ProductList.css';

const products = [
	{ id: 1, name: 'Brötchen', price: 0.3 },
	{ id: 2, name: 'Kaffee', price: 2.5 }
];

function ProductList() {
	return (
		<div>
			{products.map((product) => (
				<div className="product" key={product.id}>
					{product.name} - {product.price}€
				</div>
			))}
		</div>
	);
}

export default ProductList;
