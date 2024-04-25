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
        <Search v-model="search" />
        <div v-if="filteredProducts?.length === 0">
            There are no results for {{ search }}
        </div>
        <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12">
            <ProductCardWrapper v-for="product in filteredProducts" :id="product.id" :name="product.name">
                <ProductCardImage :name="product.name" :image_url="product.image_url" :price="product.price" />
                <ProductCardContent>
                    <ProductCardFlavors>
                        <Label v-for="flavor in product.flavor_profile" @click="handleSearch($event, flavor)">
                            {{ flavor }}</Label>
                    </ProductCardFlavors>
                    <ProductCardBody>
                        <ProductCardTitle :name="product.name" :weight="product.weight" />
                        <ProductCardDescription>{{ product.description }}</ProductCardDescription>
                        <ProductCardRegion :handle-search="handleSearch" :region="product.region">{{ product.region }}
                        </ProductCardRegion>
                    </ProductCardBody>
                    <ProductCardFooter>{{ formatCurrency(product.price) }}</ProductCardFooter>
                </ProductCardContent>
            </ProductCardWrapper>
        </div>
    </div>
</template>