import { ProductType } from "../molecules/ProductListItem";
import { ProductListItem } from "../molecules/ProductListItem";

export const ProductsList = ({ products }: { products: ProductType[] }) => {
	return (
		<ul className="mx-auto grid grid-cols-4 items-center justify-items-center gap-8 p-6">
			{products.map((product) => (
				<li key={product.id} className="max-w-2xl">
					<ProductListItem product={product} />
				</li>
			))}
		</ul>
	);
};
