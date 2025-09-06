import { cn } from "@/lib/utils"; // Utility for conditional classNames
import { Menu, X } from "lucide-react"; // Menu (hamburger) and Close (X) icons
import { useEffect, useState } from "react";

// Navigation links
const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export const Navbar = () => {
	// Track if user has scrolled down
	const [isScrolled, setIsScrolled] = useState(false);
	// Track if the mobile menu is open
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		// Update `isScrolled` based on window scroll position
		const handleScroll = () => {
			// ❌ BUG: should be window.scrollY, not screenY
			setIsScrolled(window.scrollY > 10);
		};

		// Add event listener for scrolling
		window.addEventListener("scroll", handleScroll);
		// Clean up listener when component unmounts
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				"fixed w-full z-40 transition-all duration-300",
				// Change styles if the page has been scrolled
				isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
			)}
		>
			<div className='container flex items-center justify-between'>
				{/* Logo / Brand */}
				<a
					className='text-xl font-bold text-primary flex items-center'
					href='#hero'
				>
					<span className='relative z-10'>
						<span className='text-glow text-foreground'>PedroTech</span>{" "}
						Portfolio
					</span>
				</a>

				{/* Desktop navigation (hidden on mobile) */}
				<div className='hidden md:flex space-x-8'>
					{navItems.map((item, key) => (
						<a
							key={key}
							href={item.href}
							className='text-foreground/80 hover:text-primary transition-colors duration-300'
						>
							{item.name}
						</a>
					))}
				</div>

				{/* Mobile menu toggle button (hamburger / close icon) */}
				<button
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className='md:hidden p-2 text-foreground z-50'
					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				{/* Mobile navigation overlay */}
				<div
					className={cn(
						"fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
						"transition-all duration-300 md:hidden",
						isMenuOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					)}
				>
					<div className='flex flex-col space-y-8 text-xl'>
						{navItems.map((item, key) => (
							<a
								key={key}
								href={item.href}
								className='text-foreground/80 hover:text-primary transition-colors duration-300'
								// Close menu when clicking a link
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};
