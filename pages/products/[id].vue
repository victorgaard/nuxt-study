<script setup lang="ts">
import type { Product } from '~/types/global';
const { params } = useRoute()

useSeoMeta({
    title: `Nuxt study e-commerce - Product ${params.id}`,
    ogTitle: 'Nuxt study e-commerce',
    description: 'Browse our fine selection of articles.',
    ogDescription: 'Browse our fine selection of articles.',
    ogImage: '',
    twitterCard: 'summary_large_image'
})

const { data: product, pending, error, refresh } = useFetch<Product>(`https://fakestoreapi.com/products/${params.id}`)

const currentProductName = useState('currentProductName')
currentProductName.value = computed(() => product.value?.title)
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