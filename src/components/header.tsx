import { ModeToggle } from "./mode-toogle"

export const Header = () => {
	return (
		<header className="bg-card h-18 w-full flex justify-end items-center border-b border-primary px-2 py-1">
			<ModeToggle />
		</header>	
	)
}