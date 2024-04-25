<script setup lang="ts">
import useProducts from '~/services/useProducts';

const router = useRouter()
const route = useRoute()

const query = route.query.search?.toString() || ''
const search = ref(query)
watch(search, () => router.push({ query: search.value ? { search: search.value } : {} }))

const { products, pending, error, refresh } = await useProducts()
const filteredProducts = computed(() => filterProducts({ productsArray: products.value, searchTerm: search.value }))

function handleSearch(event: MouseEvent, searchTerm: string) {
    event.preventDefault();
    search.value = searchTerm
}
</script>

<template>
    <div v-if="error">There was an issue fetching the products.
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending">Loading...</div>

    <div v-else class="flex flex-col gap-6">
        <Input v-model="search" placeholder="Search for coffee, location, flavor profile..." id="search" />
        <div v-if="filteredProducts?.length === 0">
            There are no results for {{ search }}
        </div>
        <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12">
            <ProductCard v-for="product in filteredProducts" :id="product.id" :name="product.name"
                :description="product.description" :image_url="product.image_url" :price="product.price"
                :region="product.region" :flavor_profile="product.flavor_profile" :weight="product.weight"
                :grind_option="product.grind_option" :roast_level="product.roast_level" :handleSearch="handleSearch" />
        </div>
    </div>
</template>