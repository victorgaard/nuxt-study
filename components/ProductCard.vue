<script setup lang="ts">
import type { Product } from '~/types/global'
defineProps<Product>()
</script>

<template>
    <NuxtLink :to="`/products/${id}`"
        class="flex flex-col transition-all group">
        <img :src="image"
            class="h-48 object-cover object-top group-hover:opacity-50 group-hover:object-center rounded-2xl transition-all" />
        <div class="pt-2 flex flex-1 flex-col gap-2 justify-between">
            <div class="flex flex-col gap-1">
                <p class="font-medium group-hover:text-emerald-400">{{ title }}</p>
                <p class="text-sm text-slate-400 line-clamp-3">{{ description }}</p>
            </div>
            <p class="font-medium">{{ formatCurrency(price) }}</p>
        </div>
    </NuxtLink>
</template>