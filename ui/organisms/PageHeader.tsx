import { Logo } from "../atoms/Logo";
import { CartLink } from "../atoms/CartLink";

export const PageHeader = () => {
	return (
		<header className="border-tertiary bg-primary flex items-center justify-between border-b-4 px-12 py-6 text-2xl text-white">
			<Logo />
			<CartLink />
		</header>
	);
};
