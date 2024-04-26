<script setup lang="ts">
import useProduct from '~/services/useProduct';
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';
import { currentProductStore } from '~/store/currentProduct';
import { cartStore } from '~/store/cart';

definePageMeta({
    validate: async (route) => {
        return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    }
})

const { params } = useRoute()
const { pending, error, refresh } = await useProduct({ id: params.id })
const { id, name, description, weight, region, flavor_profile, price, roast_level, image_url } = currentProductStore.currentProduct

useSeoMeta({
    title: () => `${name} ${formatWeight(weight)} ${formatCurrency(price)}`,
    ogTitle: () => `${name} ${formatWeight(weight)} ${formatCurrency(price)}`,
    description: () => `Try now ${name} ${formatWeight(weight)} ${formatCurrency(price)}`,
    ogDescription: () => `Try now ${name} ${formatWeight(weight)} ${formatCurrency(price)}`,
    ogImage: () => `${image_url}`,
    twitterCard: 'summary_large_image'
})

const quantity = ref(1)
const isAddingToCart = ref(false)

async function addToCart() {
    isAddingToCart.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    cartStore.addToCart({ id, name, image_url, price, weight, quantity: quantity.value })
    isAddingToCart.value = false
}

</script>

<template>
    <div v-if="error">There was an issue fetching the product.
        <button @:click="refresh">Please try again</button>
    </div>

    <div v-else-if="pending">Loading...</div>

    <div v-else class="flex justify-center">
        <div class="grid md:grid-cols-2 gap-12 max-w-[1180px]">
            <div
                class="relative h-[600px] flex items-center justify-center overflow-clip rounded-2xl bg-gradient-to-b from-emerald-700 to-amber-800">
                <NuxtImg loading="lazy" quality="1" height="2000px" :src="image_url"
                    :alt="`Background image for ${name}`"
                    class="absolute inset-0 -top-[90%] h-[2000px] object-cover mix-blend-soft-light opacity-30" />
                <NuxtImg loading="lazy" :src="image_url" height="600px"
                    :alt="`Product - ${name} - ${formatCurrency(price)}`"
                    class="z-10 h-[600px] object-cover scale-120" />
            </div>
            <div class="flex flex-col gap-8 justify-between">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-col gap-1.5">
                        <p class="text-3xl font-medium">{{ name }} <span class="text-slate-400">•</span> {{
                            formatWeight(weight) }}</p>
                        <p class="text-2xl font-medium">{{ formatCurrency(price) }}</p>
                    </div>
                    <div class="flex flex-col gap-1.5">
                        <p class="uppercase text-xs font-medium">description</p>
                        <p class="text-slate-400 text-balance">{{ description }}</p>
                    </div>
                    <div class="flex flex-col gap-1.5">
                        <p class="uppercase text-xs font-medium">region</p>
                        <p class="text-slate-400">{{ region }}</p>
                    </div>
                    <div class="flex flex-col gap-1.5">
                        <p class="uppercase text-xs font-medium">flavor profile</p>
                        <div class="flex gap-2">
                            <p v-for="(flavor) in flavor_profile" :key="flavor"
                                class="text-slate-300 text-sm rounded-lg bg-slate-800 px-2 py-0.5">{{
                                    flavor }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1.5">
                        <p class="uppercase text-xs font-medium">roast level</p>
                        <div class="flex items-center gap-2">
                            <CoffeeBeanIcon v-for="(_, index) in Array.from(Array(5).keys())" :key="index"
                                :class="{ 'fill-orange-800': index + 1 <= roast_level, 'fill-slate-700': index + 1 > roast_level }" />
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div
                        class="flex items-center gap-2 w-28 justify-between border border-slate-700 h-full rounded-lg overflow-clip">
                        <button :disabled="quantity <= 1"
                            class="px-3.5 hover:bg-slate-700 h-full bg-slate-800 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            @:click="quantity--">-</button>
                        <p>{{ quantity }}</p>
                        <button
                            class="px-3.5 hover:bg-slate-700 h-full bg-slate-800 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            @:click="quantity++">+</button>
                    </div>
                    <button :disabled="isAddingToCart"
                        class="flex-1 disabled:opacity-50 active:bg-amber-700 bg-amber-700 disabled:hover:bg-amber-700 disabled:cursor-not-allowed hover:bg-amber-800 transition-all flex items-center justify-center gap-2 text-white py-3 px-3.5 rounded-lg"
                        @:click="addToCart">
                        <LoadingSpinner v-if="isAddingToCart" />
                        <ShoppingCartIcon v-else class="h-5 w-5 opacity-50" />
                        Add to cart <span class="text-white opacity-50">•</span> {{ formatCurrency(price * quantity)
                        }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>