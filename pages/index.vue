<script setup lang="ts">
import useProducts from '~/services/useProducts';
const { products, pending, error, refresh } = useProducts()
</script>

<template>
    <div v-if="error">There was an issue fetching the products.
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending">Loading...</div>

    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
        <ProductCard v-for="product in products" :id="product.id" :name="product.name"
            :description="product.description" :image_url="product.image_url" :price="product.price"
            :region="product.region" :flavor_profile="product.flavor_profile" :weight="product.weight"
            :grind_option="product.grind_option" :roast_level="product.roast_level" />
    </div>
</template>