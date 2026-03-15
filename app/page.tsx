import { ProductType } from "../ui/molecules/ProductListItem";
import { SiteHeader } from "../ui/organisms/PageHeader";
import { ProductsList } from "../ui/organisms/ProductsList";
import { SiteFooter } from "../ui/molecules/SiteFooter";
const products: ProductType[] = [
	{
		id: "1",
		name: "T-shirt",
		price: 19.99,
		rating: 4.5,
		description: "A comfortable cotton t-shirt.",
		images: [
			{
				url: "/tshirt.jpg",
			},
		],
	},
	{
		id: "2",
		name: "Jeans",
		price: 49.99,
		rating: 4.0,
		description: "Stylish denim jeans.",
		images: [
			{
				url: "/tshirt.jpg",
			},
		],
	},
	{
		id: "3",
		name: "Sneakers",
		price: 89.99,
		rating: 4.8,
		description: "Comfortable and trendy sneakers.",
		images: [
			{
				url: "/tshirt.jpg",
			},
		],
	},
	{
		id: "4",
		name: "Hoodie",
		price: 39.99,
		rating: 4.3,
		description: "Warm and cozy hoodie.",
		images: [
			{
				url: "/tshirt.jpg",
			},
		],
	},
];

export default function Home() {
	return (
		<div className="flex min-h-lvh flex-col">
			<main className="flex-1 px-24 py-12">
				<ProductsList products={products} />
			</main>
		</div>
	);
}
