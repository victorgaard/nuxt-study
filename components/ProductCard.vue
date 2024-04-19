<script setup lang="ts">
import type { Product } from '../utils/types'
defineProps<Product>()
</script>

<template>
    <NuxtLink :to="`/products/${id}`"
        class="flex flex-col border border-gray-700 bg-slate-900 rounded-xl overflow-clip hover:-translate-y-1 hover:bg-slate-800 transition-all group">
        <img :src="image"
            class="h-48 object-cover group-hover:scale-105 group-hover:opacity-50 transition-all" />
        <div class="p-4 flex flex-1 flex-col gap-2 justify-between">
            <div class="flex flex-col gap-1">
                <p class="text-sm font-medium">{{ title }}</p>
                <p class="text-sm text-slate-400 line-clamp-3">{{ description }}</p>
            </div>
            <p class="font-medium group-hover:text-emerald-400">{{ formatCurrency(price) }}</p>
        </div>
    </NuxtLink>
</template>