import { ChevronRightIcon } from "lucide-react";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import ProductList from "./_components/products-list";
import PromoBanner from "./_components/promo-banner";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import { db } from "./_lib/prisma";

const Home = async () => {
	const products = await db.product.findMany({
		where: {
			discountPercentage: {
				gt: 0,
			},
		},
		take: 10,
		include: {
			restaurant: {
				select: {
					name: true,
				},
			},
		},
	});

	return (
		<>
			<Header />
			<div className="px-5 pt-6">
				<Search />
			</div>
			<div className="px-5 pt-6">
				<CategoryList />
			</div>
			<div className="pt-6">
				<PromoBanner
					src="/promo-banner-01.png"
					alt="Promo 30% de desconto em pizza"
				/>
			</div>

			<div className="space-y-4 pt-6">
				<div className="flex items-center justify-between px-5">
					<h3 className="font-semibold">Pedidos Recomendados</h3>
					<Button
						className="h-fit p-0 text-primary hover:bg-transparent hover:text-primary"
						variant="ghost"
					>
						Ver todos
						<ChevronRightIcon size={16} />
					</Button>
				</div>
				<ProductList products={products} />
			</div>

			<div className="px-5 pt-6">
				<PromoBanner
					src="/promo-banner-02.png"
					alt="Lanches a partir de 17,90"
				/>
			</div>
		</>
	);
};

export default Home;
