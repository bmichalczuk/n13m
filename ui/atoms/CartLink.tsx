import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const CartLink = () => {
	return (
		<Link
			href="/cart"
			title="Go to your cart"
			className="hover:bg-tertiary flex items-center rounded-2xl p-4 text-2xl font-bold transition-colors"
		>
			<ShoppingCart size="36" className="mx-1" />0
		</Link>
	);
};
