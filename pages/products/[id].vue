<script setup lang="ts">
import useProduct from '~/services/useProduct';

definePageMeta({
    validate: async (route) => {
        return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    }
})

const { params } = useRoute()
const { product, pending, error, refresh } = useProduct({ id: params.id })
const productName = useState('currentProductName')
productName.value = computed(() => product.value?.name)
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