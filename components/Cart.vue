<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { cartStore } from '~/store/cart';
const { cart } = cartStore
</script>

<template>
    <button class="bg-emerald-700 flex-shrink-0 flex items-center gap-2 text-white py-1.5 px-3.5 rounded-lg">
        <ShoppingCartIcon class="h-5 w-5 opacity-60" />Cart <span v-if="cart.length > 0"
            class="text-sm h-4 w-4 rounded-full bg-white text-emerald-600 flex items-center justify-center">{{
                cart.length
            }}</span>
    </button>
    <div v-for="item in cart">{{ item.name }} {{ item.quantity }}</div>
</template>