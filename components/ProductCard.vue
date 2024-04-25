<script setup lang="ts">
import { ArrowRightIcon, MapPinIcon } from '@heroicons/vue/24/outline';
import type { Product } from '~/types/global'

type ProductCardProps = Product & {
    handleSearch: (event: MouseEvent, searchTerm: string) => void;
}

defineProps<ProductCardProps>()
</script>

<template>
    <NuxtLink :alt="`Purchase ${name}`" :to="`/products/${id}`"
        class="flex flex-col group active:outline-none focus:outline-emerald-500 outline-none outline-offset-8 focus:rounded-xl">
        <div
            className="relative h-48 flex items-center justify-center overflow-clip rounded-2xl border border-slate-800 group-hover:border-slate-700/70 transition-colors">
            <NuxtImg loading="lazy" width="320" height="240" quality="1" :src="image_url"
                :alt="`Background image for ${name}`"
                class="absolute opacity-30 object-[50%_10%] object-none group-hover:object-[45%_20%] group-hover:opacity-40 transition-all blur-2xl bg-gradient-to-br from-slate-600 to-slate-500/80" />
            <NuxtImg loading="lazy" :src="image_url" width="320" height="240"
                :alt="`Product - ${name} - ${formatCurrency(price)}`"
                class="z-10 max-h-[240px] group-hover:scale-105 min-w-[320px] shrink-0 transition-all" />
        </div>
        <div class="pt-2 flex flex-1 flex-col gap-1.5 justify-between">
            <div class="flex items-center flex-wrap gap-1.5">
                <Label v-for="flavor in flavor_profile" @click="handleSearch($event, flavor)">
                    {{ flavor }}</Label>
            </div>
            <div class="flex flex-col gap-1.5">
                <p class="font-medium">{{ name }} <span class="text-slate-400">•</span> {{ formatWeight(weight) }} </p>
                <p class="text-sm text-slate-400 line-clamp-2">{{ description }}</p>
                <ButtonText @click="handleSearch($event, region)">
                    <MapPinIcon class="h-3.5 w-3.5" /> {{ region }}
                </ButtonText>
            </div>
            <div class="flex items-center gap-4">
                <p class="font-medium">{{ formatCurrency(price) }} </p>
                <ArrowRightIcon class="hidden group-hover:block h-5 w-5 text-emerald-400" />
            </div>
        </div>

    </NuxtLink>
</template>