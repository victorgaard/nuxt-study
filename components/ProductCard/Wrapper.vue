<script setup lang="ts">
import type { Product } from '~/types/global';
defineProps<Pick<Product, "id" | "name">>()
</script>

<template>
    <NuxtLink
:alt="`Purchase ${name}`" :to="`/products/${id}`"
        class="flex flex-col group active:outline-none focus:outline-emerald-500 outline-none outline-offset-8 focus:rounded-xl">
        <slot />
    </NuxtLink>
</template>