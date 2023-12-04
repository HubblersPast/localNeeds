import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Stellen Sie sicher, dass Sie die CSS-Datei erstellt haben

const products = [
	{ id: 1, name: 'Brötchen', price: 0.3 },
	{ id: 2, name: 'Kaffee', price: 2.5 }
];

function ProductList() {
	return (
		<div>
			{products.map((product) => (
				<div key={product.id} className="product">
					<Link to={`/product/${product.id}`}>
						{product.name} - {product.price}€
					</Link>
				</div>
			))}
		</div>
	);
}

export default ProductList;
