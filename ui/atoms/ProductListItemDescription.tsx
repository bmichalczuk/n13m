import { ProductType } from "../molecules/ProductListItem";

export const ProductListItemDescription = ({
	product: { name, price },
}: {
	product: ProductType;
}) => {
	return (
		<div className="flex-1 p-4">
			<h3 className="text-primary mb-1 text-2xl font-semibold">{name}</h3>
			<p className="text-secondary mb-3 text-sm">
				<span className="sr-only">Kategoria:</span> {"T-shirt"}
			</p>
			<p className="text-primary text-sm font-medium">
				<span className="sr-only">Cena:</span> {price.toFixed(2)} PLN
			</p>
		</div>
	);
};
