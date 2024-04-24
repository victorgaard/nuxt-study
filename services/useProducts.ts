import type { Product } from "~/types/global"

export default async function useProducts() {
    const { data: products, pending, error, refresh } = await useFetch<Product[]>('https://fake-coffee-api.vercel.app/api')
    return { products, pending, error, refresh }
}