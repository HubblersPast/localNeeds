import React from 'react';
import './Navbar.css';
import logoImage from './savelocal_logo.png'; // Import your logo image here

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo">
				<img src={logoImage} alt="Logo" />{' '}
				{/* Use your imported logo image */}
			</div>
			<div className="mobile-menu">
				<div className="burger-menu">
					<div />
					<div />
					<div />
				</div>
			</div>
			<div className="search-bar">
				<input type="text" placeholder="Search" />
				<button>Search</button>
			</div>
			<div className="login">Login</div>
		</nav>
	);
};

export default Navbar;
