<script setup lang="ts">
    const route = computed(() => useRouter().currentRoute.value.params.id)
    const currentProductName = useState('currentProductName', () => '')
</script>

<template>
    <nav class="flex justify-between p-8 gap-4 text-lg font-medium">
        <div class="flex items-center gap-3">
            <NuxtLink to="/" activeClass="text-emerald-400">Home</NuxtLink>
            <div v-if="route && currentProductName" class="flex items-center gap-3">
                <span class="text-slate-600">></span>
                <NuxtLink :to="`/products/${route}`" class="line-clamp-1" activeClass="text-emerald-400"> {{ currentProductName }}</NuxtLink>
            </div>
        </div>
        <Cart />
    </nav>
</template>