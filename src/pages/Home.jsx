import { TehemeToggle } from "../components/TehemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";

export const Home = () => {
	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<TehemeToggle />
			<StarBackground />
			<Navbar />
			{/* Main Content*/}
			{/* Footer*/}
		</div>
	);
};
