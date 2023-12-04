import React from 'react';
import products from './products';

function ProductDetail({ match }) {
	const productId = match.params.id;
	const product = products.find((p) => p.id.toString() === productId);

	return (
		<div>
			{product ? (
				<div>
					<h2>{product.name}</h2>
					<p>Preis: {product.price}€</p>
				</div>
			) : (
				<p>Produkt nicht gefunden</p>
			)}
		</div>
	);
}

export default ProductDetail;
