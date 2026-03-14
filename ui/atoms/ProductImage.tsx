import Image from "next/image";
import { ProductType } from "../molecules/ProductListItem";
export const ProductListItemImage = ({ images }: { images: ProductType["images"] }) => {
	return (
		<div className="aspect-square flex-1 overflow-hidden rounded-md border">
			<Image
				src={images[0].url}
				width={320}
				height={320}
				className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105 focus:scale-105"
				alt="Tshirt"
			/>
		</div>
	);
};
