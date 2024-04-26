<script setup lang="ts">
import type { Product } from '~/types/global';
defineProps<Pick<Product, "name" | "image_url" | "price">>()
</script>

<template>
    <div
        class="relative h-48 flex items-center justify-center overflow-clip rounded-2xl border border-slate-800 group-hover:border-slate-700/70 transition-colors">
        <NuxtImg
loading="lazy" width="320" height="240" quality="1" :src="image_url"
            :alt="`Background image for ${name}`"
            class="absolute opacity-40 object-[50%_10%] object-none group-hover:object-[45%_20%] group-hover:opacity-50 transition-all blur-2xl bg-gradient-to-br from-slate-600 to-slate-500/80" />
        <NuxtImg
loading="lazy" :src="image_url" width="320" height="240"
            :alt="`Product - ${name} - ${formatCurrency(price)}`"
            class="z-10 max-h-[240px] group-hover:scale-105 min-w-[320px] shrink-0 transition-all" />
    </div>
</template>