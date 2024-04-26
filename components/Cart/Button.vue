<script setup lang="ts">
import {
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from "radix-vue";
import { CreditCardIcon, ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { cartStore } from "~/store/cart";
const { cart } = cartStore;
const isCartOpen = ref(false);

watch(cart, () => (isCartOpen.value = true));

function calculateTotalPrice() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

async function removeFromCart(productId: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  cartStore.removeFromCart(productId);
}
</script>

<template>
  <PopoverRoot
    :open="isCartOpen"
    :onUpdate:open="(open: boolean) => (isCartOpen = open)"
  >
    <PopoverTrigger as-child>
      <button
        class="bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-700 transition-colors flex-shrink-0 flex items-center gap-2 text-white py-1.5 px-3.5 rounded-lg outline-none focus:outline-emerald-500 focus:rounded-lg"
      >
        <ShoppingCartIcon class="h-5 w-5 opacity-60" />Cart
        <span
          v-if="cart.length > 0"
          class="text-sm h-4 w-4 rounded-full bg-white text-emerald-600 flex items-center justify-center"
          >{{ cart.length }}</span
        >
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        align="end"
        :side-offset="8"
        class="bg-slate-800 opacity-0 animate-fade-in flex flex-col gap-4 border z-20 border-slate-700 p-4 rounded-lg text-white shadow-2xl"
      >
        <div>
          <p class="text-xl font-medium">Shopping cart</p>
          <p v-if="cart.length > 0" class="text-slate-400">
            {{ cart.length || "" }}
            {{ cart.length === 1 ? "product" : "products" }} added
          </p>
        </div>
        <div v-if="cart.length === 0" class="text-slate-300">
          There are no products in the cart.
        </div>
        <div v-else class="flex flex-col sm:min-w-[420px]">
          <div
            class="overflow-y-auto overflow-x-hidden max-h-[calc(100dvh-260px)] sm:max-h-[calc(100dvh-280px)] -mx-4 px-4"
          >
            <div
              v-for="item in cart"
              :key="item.id"
              class="flex flex-col gap-4 pb-12 last:pb-4 sm:pb-4"
            >
              <div class="flex items-center gap-4 sm:gap-6">
                <NuxtImg
                  :src="item.image_url"
                  :width="200"
                  class="bg-slate-700/50 w-[140px] sm:w-[200px] rounded-xl"
                />
                <div class="flex flex-col gap-0.5 flex-wrap">
                  <p class="font-medium">
                    {{ item.name }} {{ formatWeight(item.weight) }}
                  </p>
                  <p class="text-sm text-slate-300">
                    {{ item.quantity }}x {{ formatCurrency(item.price) }}
                    <span v-if="item.quantity > 1"
                      >({{ formatCurrency(item.price * item.quantity) }})</span
                    >
                  </p>
                  <div
                    class="flex items-center text-sm h-8 gap-2 my-2 w-28 justify-between border border-slate-600 rounded-lg"
                  >
                    <button
                      :disabled="item.quantity <= 1"
                      class="px-3.5 hover:bg-slate-600 h-full bg-slate-700 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all outline-none focus:outline-emerald-500 rounded-l-md"
                      @:click="cartStore.decrementProductQuantity(item.id)"
                    >
                      -
                    </button>
                    <p>{{ item.quantity }}</p>
                    <button
                      class="px-3.5 hover:bg-slate-600 h-full bg-slate-700 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all outline-none focus:outline-emerald-500 rounded-r-md"
                      @:click="cartStore.incrementProductQuantity(item.id, 1)"
                    >
                      +
                    </button>
                  </div>
                  <CartRemoveFromCart
                    :productId="item.id"
                    :removeFromCart="removeFromCart"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="h-[1px] bg-slate-700 -mx-4" />
          <button
            class="flex justify-between mt-4 py-3 px-6 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-700 transition-colors rounded outline-none focus:outline-emerald-500"
          >
            <p class="flex items-center gap-2">
              <CreditCardIcon class="h-6 w-6 opacity-50" /> Checkout
            </p>
            <span>Total: {{ formatCurrency(calculateTotalPrice()) }}</span>
          </button>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
