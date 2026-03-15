export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { productId } = await params;
	return (
		<div>
			<h1>Product {productId}</h1>
		</div>
	);
}
