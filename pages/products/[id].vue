<script setup lang="ts">
const { params } = useRoute()
const { data: product, pending, error, refresh } = useFetch<Product>(`https://fakestoreapi.com/products/${params.id}`)
</script>

<template>
    <div v-if="error">There was an issue fetching the products.
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending">Loading...</div>

    <div v-else>
        {{ JSON.stringify(product) }}
    </div>
</template>