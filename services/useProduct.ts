import type { Product } from "~/types/global";

type UseProduct = {
    id: string | string[]
}

export default function useProduct({ id }: UseProduct) {
    const { data: product, pending, error, refresh } = useFetch<Product>(`https://fake-coffee-api.vercel.app/api/${id}`)
    return { product, pending, error, refresh }
}