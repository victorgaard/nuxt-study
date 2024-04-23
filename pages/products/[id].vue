<script setup lang="ts">
import type { Product } from '~/types/global';
const { params } = useRoute()


const { data: product, pending, error, refresh } = useFetch<Product>(`https://fakestoreapi.com/products/${params.id}`)

const currentProductName = useState('currentProductName')
currentProductName.value = computed(() => product.value?.title)

useSeoMeta({
    title: `Nuxt study e-commerce - ${currentProductName.value}`,
    ogTitle: `Nuxt study e-commerce - ${currentProductName.value}`,
    description: `Purchase ${currentProductName.value} at the best price here.`,
    ogDescription: `Purchase ${currentProductName.value} at the best price here.`,
    ogImage: '',
    twitterCard: 'summary_large_image'
})
</script>

<template>
    <div v-if="error">There was an issue fetching the product. 
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending">Loading...</div>

    <div v-else>
        {{ JSON.stringify(product) }}
    </div>
</template>