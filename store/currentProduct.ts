import type { Product } from "~/types/global";

type ProductType = Product | ComputedRef<Product>;

type CartStore = {
	currentProduct: ProductType;
	updateCurrentProduct: (product: ProductType | undefined) => void;
};

const INITIAL_PRODUCT: ProductType = {
	id: 0,
	name: "",
	description: "",
	price: 0,
	region: "",
	weight: 0,
	flavor_profile: [],
	roast_level: 0,
	grind_option: [],
	image_url: "",
};

export const currentProductStore = reactive<CartStore>({
	currentProduct: INITIAL_PRODUCT,
	updateCurrentProduct(product: ProductType | undefined) {
		if (!product) return (this.currentProduct = INITIAL_PRODUCT);
		this.currentProduct = product;
	},
});
