"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export const ActiveLink = ({
	href,
	children,
	exact = true,
}: {
	href: string;
	children: React.ReactNode;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);
	console.log({ pathname, href, isActive });
	return (
		<Link href={href} className={isActive ? "text-tertiary" : "text-white"}>
			{children}
		</Link>
	);
};
