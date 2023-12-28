import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
	return (
		<div className="productList">
			<div className="productRow">
				{products.map((product) => (
					<div key={product.id} className="product">
						<h2>{product.name}</h2>
						<p>{product.description}</p>
						<p>{product.price}</p>
						<p>{product.category}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
