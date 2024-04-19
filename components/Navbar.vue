<script setup lang="ts">
    const route = computed(() => useRouter().currentRoute.value.params.id)
</script>

<template>
    <nav class="flex items-center gap-3 p-8 text-lg font-medium">
        <NuxtLink to="/" activeClass="text-emerald-400">Home</NuxtLink>
        <div v-if="route" class="flex items-center gap-3">
            <span class="text-slate-600">></span>
            <NuxtLink :to="`/products/${route}`" activeClass="text-emerald-400">Product {{  route  }}</NuxtLink>
        </div>
    </nav>
</template>