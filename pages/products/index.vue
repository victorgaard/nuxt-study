<script setup lang="ts">
type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        counter: number;
    }
}
const { data: products, pending } = useFetch<Product[]>('https://fakestoreapi.com/products/')

function formatCurrency(price: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR'}).format(price)
}
</script>

<template>
    <div v-if="pending" className="p-4">Loading...</div>
    <div v-else className="grid grid-cols-3 gap-4 p-4">
        <NuxtLink :to="`/products/${product.id}`" v-for="product in products" className="flex flex-col border border-gray-700 bg-slate-900 rounded-xl overflow-clip hover:-translate-y-1 hover:bg-slate-800 transition-all group">
            <img :src="product.image" className="h-48 object-cover group-hover:scale-105 transition-all" />
            <div className="p-4 flex flex-1 flex-col gap-2 justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{{ product.title }}</p>
                    <p className="text-sm text-slate-400 line-clamp-3">{{ product.description }}</p>
                </div>
                <p className="font-medium">{{ formatCurrency(product.price) }}</p>
            </div>
        </NuxtLink>
    </div>
</template>