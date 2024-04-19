export type ProductRating = {
    rate: number;
    counter: number
}

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating
}