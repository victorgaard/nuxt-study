<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import type { Product } from '~/types/global'
defineProps<Product>()
</script>

<template>
    <NuxtLink :to="`/products/${id}`"
        class="flex flex-col transition-all group">
        <img :src="image_url"
            :alt="`Product - ${name} - ${formatCurrency(price)}`"
            :class="`h-48 object-none group-hover:opacity-50 group-hover:object-[50%_5%] rounded-2xl transition-all bg-gradient-to-br from-slate-800 to-slate-700/80`" />
        <div class="pt-2 flex flex-1 flex-col gap-2 justify-between">
            <div class="flex flex-col gap-1">
                <p class="font-medium group-hover:text-emerald-400">{{ name }}</p>
                <p class="text-sm text-slate-400 line-clamp-3">{{ description }}</p>
            </div>
            <div class="flex items-center gap-4">
                <p class="font-medium">{{ formatCurrency(price) }}</p>
                <ArrowRightIcon class="hidden group-hover:block h-5 w-5 text-emerald-400" />
            </div>
        </div>
    </NuxtLink>
</template>