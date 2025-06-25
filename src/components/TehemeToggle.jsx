// Import React hooks
import { useEffect, useState } from "react";

// Import icons from lucide-react
import { Sun, Moon } from "lucide-react";

// Import utility to merge Tailwind class names
import { cn } from "@/lib/utils";

/**
 * ThemeToggle component
 *
 * A floating button that toggles between light and dark themes.
 * - Stores user preference in localStorage.
 * - Applies/removes the `dark` class on <html> for Tailwind dark mode.
 * - Shows a Sun icon when in dark mode, and a Moon icon otherwise.
 * - Hidden on small screens (via Tailwind `max-sm:hidden`).
 */
export const TehemeToggle = () => {
	// Track whether dark mode is currently active
	const [isDarkMode, setIsDarkMode] = useState(false);

	// On first render: check localStorage for stored theme and apply it
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		}
	}, []);

	// Toggle theme between light and dark
	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDarkMode(true);
		}
	};

	return (
		<button
			onClick={toggleTheme}
			className={cn(
				// Positioning and appearance
				"fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
				// Custom focus styling
				"focus:outline-hidden"
			)}
		>
			{/* Show sun or moon icon depending on current mode */}
			{isDarkMode ? (
				<Sun className='h-6 w-6 text-yellow-300' />
			) : (
				<Moon className='h-6 w-6 text-blue-900' />
			)}
		</button>
	);
};
