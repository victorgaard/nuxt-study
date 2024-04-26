import type { Product } from "~/types/global";

type CartProductType = Pick<
	Product,
	"id" | "name" | "image_url" | "weight" | "price"
> & { quantity: number };

type CartStore = {
	cart: CartProductType[];
	checkIfProductIsInTheCart: (productId: number) => boolean;
	getProductIndex: (productId: number) => number;
	removeFromCart: (productId: number) => void;
	incrementProductQuantity: (productId: number, quantity: number) => void;
	decrementProductQuantity: (productId: number) => void;
	addToCart: (cartProduct: CartProductType) => void;
};

export const cartStore = reactive<CartStore>({
	cart: [],
	checkIfProductIsInTheCart(productId: number) {
		return !!this.cart.find((product) => product.id === productId);
	},
	getProductIndex(productId: number) {
		return this.cart.findIndex((product) => product.id === productId);
	},
	removeFromCart(productId: number) {
		const productIndex = this.getProductIndex(productId);
		this.cart.splice(productIndex, 1);
	},
	incrementProductQuantity(productId: number, surplusQuantity: number) {
		const productIndex = this.getProductIndex(productId);
		this.cart[productIndex].quantity =
			this.cart[productIndex].quantity + surplusQuantity;
	},
	decrementProductQuantity(productId: number) {
		const productIndex = this.getProductIndex(productId);
		if (this.cart[productIndex].quantity === 1)
			return this.removeFromCart(productId);
		this.cart[productIndex].quantity--;
	},
	addToCart(cartProduct: CartProductType) {
		const isProductInTheCart = this.checkIfProductIsInTheCart(cartProduct.id);
		if (isProductInTheCart)
			return this.incrementProductQuantity(cartProduct.id, cartProduct.quantity);
		this.cart.push(cartProduct);
	},
});
