import type { Prisma } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency, getProductTotalPrice } from "../_helper/pricer";

interface ProductItemProps {
	product: Prisma.ProductGetPayload<{
		include: {
			restaurant: {
				select: {
					name: true;
				};
			};
		};
	}>;
}
const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<div className="w-[150px] min-w-[150px] space-y-2">
			<div className="relative h-[150px] w-full">
				<Image
					className="rounded-lg object-cover shadow-md"
					src={product.imageUrl}
					alt={product.name}
					fill
				/>

				<div className="absolute top-2 left-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
					<ArrowDownIcon size={12} />
					<span className="font-semibold text-xs">
						{product.discountPercentage}%
					</span>
				</div>
			</div>
			<div>
				<h2 className="truncate text-sm">{product.name}</h2>
				<div className="flex items-center gap-1">
					<h3 className="font-semibold">
						{formatCurrency(getProductTotalPrice(product))}
					</h3>
					{product.discountPercentage > 0 && (
						<span className="text-muted-foreground text-xs line-through">
							{formatCurrency(Number(product.price))}
						</span>
					)}
				</div>
				<span className="block text-muted-foreground text-xs">
					{product.restaurant.name}
				</span>
			</div>
		</div>
	);
};

export default ProductItem;
