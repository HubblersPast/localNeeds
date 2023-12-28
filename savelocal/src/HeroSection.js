import React from 'react';
import './HeroSection.css';
import heroImage from './hero_image_savelocal.png'; // Import your hero image here

const HeroSection = () => {
	return (
		<div className="hero">
			<div className="heroContent">
				<h1>Willkommen bei SaveLocal</h1>
				<p>
					Deine Anlaufstelle für lokale und günstige Produkte,
					Dienstleistungen und mehr.
				</p>
				<p>
					Vernetze dich Lokal, lerne deine Umgebung kennen und spare
					dabei!
				</p>
				<button>Learn More</button>
			</div>
			<img src={heroImage} alt="Hero" className="heroImage" />
		</div>
	);
};

export default HeroSection;
