import type { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
	category: Category;
}

const CategoryItem = async ({ category }: CategoryItemProps) => {
	return (
		<div className="flex items-center justify-center gap-3 rounded-full bg-white px-4 py-3 shadow-md">
			<Image
				src={category.imageUrl}
				alt={category.name}
				height={24}
				width={24}
			/>

			<span className="font-semibold text-xs">{category.name}</span>
		</div>
	);
};

export default CategoryItem;
