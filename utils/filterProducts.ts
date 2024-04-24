import type { Product } from "~/types/global";

type FilterProducts = {
	productsArray: Product[] | null;
	searchTerm: string;
};

export function filterProducts({ productsArray, searchTerm }: FilterProducts) {
	const search = searchTerm.toLowerCase();
	return productsArray?.filter((product) => {
		const name = product.name.toLowerCase();
        const flavorMatch = product.flavor_profile.some(flavor => flavor.toLowerCase().includes(search));
		const location = product.region.toLowerCase();
		return name.includes(search) || location.includes(search) || flavorMatch;
	});
}
