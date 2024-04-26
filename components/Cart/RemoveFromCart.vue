<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/outline";
type RemoveFromCartProps = {
  productId: number;
  removeFromCart: (productId: number) => Promise<void>;
};
const props = defineProps<RemoveFromCartProps>();
const isRemovingFromCart = ref(false);

async function handleRemoveFromCart() {
  isRemovingFromCart.value = true;
  await props.removeFromCart(props.productId);
  isRemovingFromCart.value = false;
}
</script>

<template>
  <button
    @:click="handleRemoveFromCart()"
    :disabled="isRemovingFromCart"
    class="flex items-center gap-2 text-slate-300 hover:text-white transition-all text-sm mr-auto outline-none focus:outline-emerald-500 focus:rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-slate-300"
  >
    <LoadingSpinner v-if="isRemovingFromCart" class="h-4 w-4" />
    <TrashIcon v-else class="h-4 w-4 opacity-50" />
    Remove from cart
  </button>
</template>
