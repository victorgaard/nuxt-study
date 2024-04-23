<script setup lang="ts">
import type { Product } from '~/types/global';

useSeoMeta({
    title: 'Nuxt study e-commerce',
    ogTitle: 'Nuxt study e-commerce',
    description: 'Browse our fine selection of articles.',
    ogDescription: 'Browse our fine selection of articles.',
    ogImage: '',
    twitterCard: 'summary_large_image'
})

const { data: products, pending, error, refresh } = useFetch<Product[]>('https://fakestoreapi.com/products/')
</script>

<template>
    <div v-if="error">There was an issue fetching the products.
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending">Loading...</div>

    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
        <ProductCard v-for="product in products" :id="product.id" :title="product.title"
            :description="product.description" :image="product.image" :price="product.price"
            :category="product.category" :rating="product.rating" />
    </div>
</template>