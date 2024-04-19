<script setup lang="ts">
    const routes = [{
        href: '/',
        label: 'Nuxt store'
    },{
        href: '/products',
        label: 'Products'
    }]
</script>

<template>
    <nav className="flex items-center gap-12 p-6">
        <NuxtLink v-for="route in routes" :to="route.href" activeClass="text-emerald-400 font-medium">{{
            route.label }}</NuxtLink>
    </nav>
</template>