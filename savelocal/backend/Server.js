const express = require('express');
const app = express();
const port = 3000; // Can be any port number

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for home page
app.get('/', (req, res) => {
	res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

// Sample array to act as a database
let products = [
	// your products array
];

// Get all products
app.get('/api/products', (req, res) => {
	res.json(products);
});

// Get a single product by ID
app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p.id === parseInt(req.params.id));
	if (!product) res.status(404).send('Product not found');
	res.json(product);
});

// Create a new product
app.post('/api/products', (req, res) => {
	const product = {
		id: products.length + 1,
		name: req.body.name
		// other properties
	};
	products.push(product);
	res.status(201).send(product);
});

// Update a product
app.put('/api/products/:id', (req, res) => {
	// logic to update a product
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
	// logic to delete a product
});
