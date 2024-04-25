<script setup lang="ts">
import { BuildingStorefrontIcon } from '@heroicons/vue/24/outline';
import { store } from '~/store/store'
const route = computed(() => useRouter().currentRoute.value.params.id)
</script>

<template>
    <nav class="flex justify-between p-8 gap-4 text-lg font-medium">
        <div class="flex items-center gap-3">
            <NuxtLink alt="Initial page" to="/" class="flex items-center gap-2" activeClass="text-emerald-400">
                <BuildingStorefrontIcon class="h-5 w-5 opacity-50" /> Coffee shop
            </NuxtLink>
            <div v-if="route && store.currentProduct.name" class="hidden sm:flex items-center gap-3">
                <span class="text-slate-600">></span>
                <NuxtLink alt="Product page" :to="`/products/${route}`" class="line-clamp-1"
                    activeClass="text-emerald-400"> {{ store.currentProduct.name }}</NuxtLink>
            </div>
        </div>
        <Cart />
    </nav>
</template>