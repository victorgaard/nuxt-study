import { currentProductStore } from "~/store/currentProduct";
import type { Product } from "~/types/global";

type UseProduct = {
  id: string | string[];
};

export default async function useProduct({ id }: UseProduct) {
  const {
    data: product,
    pending,
    error,
    refresh,
  } = await useFetch<Product[]>(`https://fake-coffee-api.vercel.app/api/${id}`);
  const newProduct = ref(product.value?.[0]);
  currentProductStore.updateCurrentProduct(newProduct.value);
  return { product, pending, error, refresh };
}
