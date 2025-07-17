import { useEffect, useState } from "react";

// This component adds a background of randomly placed and animated stars
export const StarBackground = () => {
	// We use React state to store all the stars we generate
	const [stars, setStars] = useState([]);
	const [meteors, setMeteors] = useState([]);

	// This runs ONCE when the component loads (the empty array means it only runs once)
	useEffect(() => {
		generateStars();
		generateMeteors(); // Make the stars appear when the page loads

		const handleResize = () => {
			generateStars();
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Function to create the stars
	const generateStars = () => {
		// Decide how many stars to make based on screen size
		const numberOfStars = Math.floor(
			(window.innerWidth * window.innerHeight) / 10000
		);

		// Create an empty list to fill with stars
		const newStars = [];

		// Loop through and make each star with random properties
		for (let i = 0; i < numberOfStars; i++) {
			newStars.push({
				id: i, // unique ID so React can track each star
				size: Math.random() * 3 + 1, // size between 1 and 4 pixels
				x: Math.random() * 100, // horizontal position (in % of screen width)
				y: Math.random() * 100, // vertical position (in % of screen height)
				opacity: Math.random() * 0.5 + 0.5, // how transparent the star is
				animationDuration: Math.random() * 4 + 2, // how long the twinkle lasts (2–6s)
			});
		}

		// Save all the generated stars into state
		setStars(newStars);
	};

	const generateMeteors = () => {
		// Decide how many stars to make based on screen size
		const numberOfMeteors = 4;
		const newMeteors = [];

		// Loop through and make each star with random properties
		for (let i = 0; i < numberOfMeteors; i++) {
			newMeteors.push({
				id: i, // unique ID so React can track each star
				size: Math.random() * 2 + 1, // size between 1 and 4 pixels
				x: Math.random() * 100, // horizontal position (in % of screen width)
				y: Math.random() * 20, // vertical position (in % of screen height)
				delay: Math.random() * 15, // how transparent the star is
				animationDuration: Math.random() * 3 + 2, // how long the twinkle lasts (2–6s)
			});
		}

		// Save all the generated stars into state
		setMeteors(newMeteors);
	};

	return (
		// This is a full-screen container for the stars.
		// It's fixed to cover the whole screen and doesn't interfere with clicks (pointer-events-none)
		<div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
			{/* Loop through each star and draw it as a div on the screen */}
			{stars.map((star) => (
				<div
					key={star.id} // Every React element in a list needs a unique key
					className='star animate-pulse-subtle' // Add animation via CSS classes
					style={{
						width: star.size + "px", // Make it the right size
						height: star.size + "px", // Same as width (a circle)
						left: star.x + "%", // Put it somewhere horizontally
						top: star.y + "%", // Put it somewhere vertically
						opacity: star.opacity, // Set how see-through it is
						animationDuration: star.animationDuration + "s", // How fast it twinkles
					}}
				/>
			))}
			{meteors.map((meteor) => (
				<div
					key={meteor.id} // Every React element in a list needs a unique key
					className='meteor animate-meteor' // Add animation via CSS classes
					style={{
						width: meteor.size * 50 + "px", // Make it the right size
						height: meteor.size + "px", // Same as width (a circle)
						left: meteor.x + "%", // Put it somewhere horizontally
						top: meteor.y + "%", // Put it somewhere vertically
						animationDelay: meteor.opacity, // Set how see-through it is
						animationDuration: meteor.animationDuration + "s", // How fast it twinkles
					}}
				/>
			))}
		</div>
	);
};
