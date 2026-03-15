import { ActiveLink } from "../atoms/ActiveLink";

export const PageNavbar = () => {
	return (
		<nav className="flex gap-4">
			<ActiveLink href="/product/1" exact={true}>
				Product 1
			</ActiveLink>
			<ActiveLink href="/product/2" exact={false}>
				Product 2
			</ActiveLink>
		</nav>
	);
};
