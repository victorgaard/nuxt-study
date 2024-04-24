<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import type { Product } from '~/types/global'
defineProps<Product>()
</script>

<template>
    <NuxtLink :to="`/products/${id}`" class="flex flex-col group">
        <div className="relative h-48 flex items-center justify-center overflow-clip rounded-2xl border border-slate-800 group-hover:border-slate-700/70 transition-colors">
            <NuxtImg quality="1" :src="image_url" :alt="`Background image for ${name}`"
                class="absolute opacity-30 object-[50%_10%] object-none group-hover:object-[50%_13%] group-hover:opacity-40 transition-all blur-2xl bg-gradient-to-br from-slate-600 to-slate-500/80" />
            <NuxtImg :src="image_url" width="320" height="240" :alt="`Product - ${name} - ${formatCurrency(price)}`"
                class="z-10 max-h-[240px] min-w-[320px] shrink-0" />
        </div>
        <div class="pt-2 flex flex-1 flex-col gap-2 justify-between">
            <div class="flex flex-col gap-1">
                <p class="font-medium group-hover:text-emerald-400 transition-colors">{{ name }}</p>
                <p class="text-sm text-slate-400 line-clamp-3">{{ description }}</p>
            </div>
            <div class="flex items-center gap-4">
                <p class="font-medium">{{ formatCurrency(price) }}</p>
                <ArrowRightIcon class="hidden group-hover:block h-5 w-5 text-emerald-400" />
            </div>
        </div>

    </NuxtLink>
</template>