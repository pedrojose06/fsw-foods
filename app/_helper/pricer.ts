import type { Product } from "@prisma/client";

export const getProductTotalPrice = (product: Product): number => {
	if (product.discountPercentage === 0) {
		return Number(product.price);
	}
	const discount = Number(product.price) * (product.discountPercentage / 100);

	return Number(product.price) - discount;
};

export const formatCurrency = (value: number): string => {
	return Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
		maximumFractionDigits: 2,
	}).format(value);
};
