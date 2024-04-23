<script setup lang="ts">
    import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
    const route = computed(() => useRouter().currentRoute.value.params.id)
    const currentProductName = useState('currentProductName', () => route)
</script>

<template>
    <nav class="flex justify-between p-8 gap-4 text-lg font-medium">
        <div class="flex items-center gap-3">
            <NuxtLink to="/" activeClass="text-emerald-400">Home</NuxtLink>
            <div v-if="route" class="flex items-center gap-3">
                <span class="text-slate-600">></span>
                <NuxtLink :to="`/products/${route}`" class="line-clamp-1" activeClass="text-emerald-400"> {{ currentProductName }}</NuxtLink>
            </div>
        </div>
        <button class="bg-emerald-700 flex items-center gap-2 text-white py-1.5 px-3.5 rounded-lg">
            <ShoppingCartIcon class="h-5 w-5 opacity-60" />Cart
        </button>
    </nav>
</template>