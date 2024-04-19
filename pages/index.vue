<script setup lang="ts">
    const { data: products, pending, error, refresh } = useFetch<Product[]>('https://fakestoreapi.com/products/')
</script>

<template>
    <div v-if="error" className="p-4">There was an issue fetching the products.
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending" className="p-4">Loading...</div>

    <div v-else className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        <NuxtLink v-for="product in products" :to="`/products/${product.id}`"
            className="flex flex-col border border-gray-700 bg-slate-900 rounded-xl overflow-clip hover:-translate-y-1 hover:bg-slate-800 transition-all group">
            <img :src="product.image"
                className="h-48 object-cover group-hover:scale-105 group-hover:opacity-50 transition-all" />
            <div className="p-4 flex flex-1 flex-col gap-2 justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{{ product.title }}</p>
                    <p className="text-sm text-slate-400 line-clamp-3">{{ product.description }}</p>
                </div>
                <p className="font-medium group-hover:text-emerald-400">{{ formatCurrency(product.price) }}</p>
            </div>
        </NuxtLink>
    </div>
</template>