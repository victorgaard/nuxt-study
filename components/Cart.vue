<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
const cartCount = ref(0)
</script>

<template>
    <button class="bg-emerald-700 flex-shrink-0 flex items-center gap-2 text-white py-1.5 px-3.5 rounded-lg">
        <ShoppingCartIcon class="h-5 w-5 opacity-60" />Cart {{ cartCount }}
    </button>
</template>