import Link from "next/link";
export const SiteFooter = () => {
	return (
		<footer className="w-full border-t border-gray-300 py-4 text-center text-gray-600">
			<Link href="/regulamin" className="mx-2 hover:underline">
				Regulamin
			</Link>
			&copy; {new Date().getFullYear()} n13m. All rights reserved.
			<Link href="/privacy-policy" className="mx-2 hover:underline">
				Polityka Prywatności
			</Link>
		</footer>
	);
};
