<script setup lang="ts">
import { store } from '~/store/store';
import useProduct from '~/services/useProduct';

definePageMeta({
    validate: async (route) => {
        return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    }
})

const { params } = useRoute()
const { product, pending, error, refresh } = await useProduct({ id: params.id })

const newProduct = ref(product.value?.[0])
store.updateCurrentProduct(newProduct.value)

const { name, weight, price, image_url } = store.currentProduct

useSeoMeta({
    title: () => `${name} ${weight} ${formatCurrency(price)}`,
    ogTitle: () => `${name} ${weight} ${formatCurrency(price)}`,
    description: () => `Try now ${name} ${weight} ${formatCurrency(price)}`,
    ogDescription: () => `Try now ${name} ${weight} ${formatCurrency(price)}`,
    ogImage: () => `${image_url}`,
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