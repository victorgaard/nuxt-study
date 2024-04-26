<script setup lang="ts">
import {
    PopoverContent,
    PopoverPortal,
    PopoverRoot,
    PopoverTrigger,
} from 'radix-vue'
import { ShoppingCartIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { cartStore } from '~/store/cart';
const { cart } = cartStore
const isCartOpen = ref(false)

watch(cart, () => isCartOpen.value = true)

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
</script>

<template>
    <PopoverRoot :open="isCartOpen" :onUpdate:open="(open) => isCartOpen = open">
        <PopoverTrigger asChild>
            <button class="bg-emerald-700 flex-shrink-0 flex items-center gap-2 text-white py-1.5 px-3.5 rounded-lg">
                <ShoppingCartIcon class="h-5 w-5 opacity-60" />Cart <span v-if="cart.length > 0"
                    class="text-sm h-4 w-4 rounded-full bg-white text-emerald-600 flex items-center justify-center">{{
                        cart.length
                    }}</span>
            </button>
        </PopoverTrigger>
        <PopoverPortal>
            <PopoverContent align="end" :sideOffset="8"
                class="bg-slate-800 flex flex-col gap-4 border z-20 border-slate-700 p-4 rounded-lg text-white shadow-2xl">
                <div>
                    <p class="text-xl font-medium">Shopping cart</p>
                    <p v-if="cart.length > 0" class="text-slate-400">{{ cart.length || '' }} {{ cart.length === 1 ?
                        'product' :
                        'products' }} added</p>
                </div>
                <div v-if="cart.length === 0" class="text-slate-300">
                    There are no products in the cart.
                </div>
                <div v-else class="flex flex-col min-w-[460px]">
                    <div class="overflow-y-auto overflow-x-hidden max-h-[calc(100dvh-280px)] -mx-4 px-4">
                        <div v-for="item in cart" class="flex flex-col gap-4 pb-4">
                            <div class="flex items-center gap-6">
                                <NuxtImg :src="item.image_url" :width="200" class="bg-slate-700/50 rounded-xl" />
                                <div class="flex flex-col gap-0.5 flex-wrap">
                                    <p class="font-medium">{{ item.name }} {{ formatWeight(item.weight) }}</p>
                                    <p class="text-sm text-slate-300">{{ item.quantity }}x {{ formatCurrency(item.price)
                                        }} {{
                                            item.quantity > 1 ?
                                                `(${formatCurrency(item.price * item.quantity)})` : '' }}</p>
                                    <div
                                        class="flex items-center text-sm h-8 gap-2 my-2 w-28 justify-between border border-slate-600 rounded-lg overflow-clip">
                                        <button :disabled="item.quantity <= 1"
                                            @:click="cartStore.decrementProductQuantity(item.id)"
                                            class="px-3.5 hover:bg-slate-600 h-full bg-slate-700 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all">-</button>
                                        <p>{{ item.quantity }}</p>
                                        <button @:click="cartStore.incrementProductQuantity(item.id, 1)"
                                            class="px-3.5 hover:bg-slate-600 h-full bg-slate-700 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all">+</button>
                                    </div>
                                    <button class="flex items-center gap-2 text-sm mr-auto"
                                        @:click="cartStore.removeFromCart(item.id)">
                                        <TrashIcon class="h-4 w-4 opacity-50" /> Remove from cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="h-[1px] bg-slate-700 -mx-4" />
                    </div>
                    <div class="h-[1px] bg-slate-700 -mx-4" />
                    <button class="flex justify-between mt-4 py-3 px-6 bg-emerald-600 rounded"><span>Checkout</span><span>Total:
                            {{ formatCurrency(calculateTotalPrice())
                            }}</span></button>
                </div>
            </PopoverContent>
        </PopoverPortal>
    </PopoverRoot>
</template>