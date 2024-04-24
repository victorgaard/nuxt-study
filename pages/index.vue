<script setup lang="ts">
import useProducts from '~/services/useProducts';
const { products, pending, error, refresh } = useProducts()
const search = ref('')
const filteredProducts = computed(() => filterProducts({ productsArray: products.value, searchTerm: search.value }))
</script>

<template>
    <div v-if="error">There was an issue fetching the products.
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending">Loading...</div>

    <div v-else class="flex flex-col gap-8">
        <input v-model="search" placeholder="Search for your coffee.."
            class="bg-slate-800 border text-sm border-slate-700 px-4 py-2.5 rounded-xl" />
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12">
            <ProductCard v-for="product in filteredProducts" :id="product.id" :name="product.name"
                :description="product.description" :image_url="product.image_url" :price="product.price"
                :region="product.region" :flavor_profile="product.flavor_profile" :weight="product.weight"
                :grind_option="product.grind_option" :roast_level="product.roast_level" />
        </div>
    </div>
</template>