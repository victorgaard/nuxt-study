<script setup lang="ts">
    import { store } from '~/store/store'
    const route = computed(() => useRouter().currentRoute.value.params.id)
</script>

<template>
    <nav class="flex justify-between p-8 gap-4 text-lg font-medium">
        <div class="flex items-center gap-3">
            <NuxtLink alt="Initial page" to="/" activeClass="text-emerald-400">Home</NuxtLink>
            <div v-if="route && store.currentProduct.name" class="flex items-center gap-3">
                <span class="text-slate-600">></span>
                <NuxtLink alt="Product page" :to="`/products/${route}`" class="line-clamp-1" activeClass="text-emerald-400"> {{ store.currentProduct.name }}</NuxtLink>
            </div>
        </div>
        <Cart />
    </nav>
</template>