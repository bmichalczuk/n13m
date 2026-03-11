import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/" aria-label="Go to homepage" title="Go to homepage">
			<h1 className="flex items-baseline text-6xl font-bold tracking-wide italic">
				N13M<p className="ml-1 text-sm tracking-normal italic">store</p>
			</h1>
		</Link>
	);
};
