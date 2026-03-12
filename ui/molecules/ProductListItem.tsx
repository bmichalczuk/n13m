import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { ProductListItemImage } from "../atoms/ProductImage";

export type ProductType = {
	id: string;
	name: string;
	price: number;
	rating: number;
	description: string;
	images: {
		url: string;
	}[];
};

export const ProductListItem = ({ product }: { product: ProductType }) => {
	return (
		<article className="flex flex-row rounded-lg border bg-slate-50 p-4 transition-colors hover:bg-gray-50">
			<ProductListItemImage images={product.images} />
			<ProductListItemDescription product={product} />
		</article>
	);
};
