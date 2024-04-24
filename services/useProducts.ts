import type { Product } from "~/types/global"

export default function useProducts() {
    const { data: products, pending, error, refresh } = useFetch<Product[]>('https://fake-coffee-api.vercel.app/api')
    return { products, pending, error, refresh }
}