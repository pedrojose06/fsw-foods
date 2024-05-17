import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import ProductList from "./_components/products-list";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";

const Home = () => {
	return (
		<>
			<Header />
			<div className="px-5 pt-6">
				<Search />
			</div>
			<div className="px-5 pt-6">
				<CategoryList />
			</div>
			<div className="px-5 pt-6">
				<Image
					src="/promo-banner-01.png"
					alt="Promo 30% de desconto em pizza"
					height={0}
					width={0}
					className="h-auto w-full object-contain"
					sizes="100vw"
					quality={100}
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
				<ProductList />
			</div>
		</>
	);
};

export default Home;
