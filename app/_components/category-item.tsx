import type { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
	category: Category;
}

const CategoryItem = async ({ category }: CategoryItemProps) => {
	return (
		<div className="item-center flex gap-3 rounded-full bg-white px-4 py-3 shadow-md">
			<Image
				src={category.imageUrl}
				alt={category.name}
				width={30}
				height={30}
			/>
			<span className="font-semibold text-sm">{category.name}</span>
		</div>
	);
};

export default CategoryItem;
