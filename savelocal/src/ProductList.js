import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
	// Separate the first row products from the rest
	const firstRowProducts = products.slice(0, 3);
	const otherProducts = products.slice(3);

	return (
		<div className="productList">
			{/* First Row */}
			<div className="productRow">
				{firstRowProducts.map((product, index) => (
					<div
						key={product.id}
						className={`product ${index === 1 ? 'middle' : ''}`}
					>
						<h2>{product.name}</h2>
						<p>{product.description}</p>
						<p>{product.price}</p>
						<p>{product.category}</p>
					</div>
				))}
			</div>

			{/* Second Row and Beyond */}
			{otherProducts.length > 0 && (
				<div className="productRow">
					{otherProducts.map((product) => (
						<div key={product.id} className="product">
							<h2>{product.name}</h2>
							<p>{product.description}</p>
							<p>{product.price}</p>
							<p>{product.category}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ProductList;
