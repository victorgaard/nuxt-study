<script setup lang="ts">
import type { Product } from '~/types/global';
const { data: products, pending, error, refresh } = await useLazyFetch<Product[]>('https://fakestoreapi.com/products/')
</script>

<template>
    <div v-if="error">There was an issue fetching the products.
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending">Loading...</div>

    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ProductCard 
            v-for="product in products" 
            :id="product.id" 
            :title="product.title"
            :description="product.description" 
            :image="product.image" 
            :price="product.price"
            :category="product.category" 
            :rating="product.rating" />
    </div>
</template>