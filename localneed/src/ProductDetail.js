import React from 'react';

function ProductDetail({ match }) {
	// Hier könnten Sie Logik hinzufügen, um Produktdetails basierend auf der ID zu laden
	const productId = match.params.id;
	// Beispiel: Finden Sie das Produkt in Ihrer Produktliste
	const product = products.find((p) => p.id.toString() === productId);

	return (
		<div>
			{product ? (
				<div>
					<h2>{product.name}</h2>
					<p>Preis: {product.price}€</p>
					{/* Weitere Produktdetails hier */}
				</div>
			) : (
				<p>Produkt nicht gefunden</p>
			)}
		</div>
	);
}

export default ProductDetail;
