<script setup lang="ts">
    useSeoMeta({
        title: 'Nuxt study coffee shop',
        ogTitle: 'Nuxt study coffee shop',
        description: 'Browse our fine selection of coffees.',
        ogDescription: 'Browse our fine selection of coffees.',
        ogImage: '',
        twitterCard: 'summary_large_image'
    })
</script>

<template>
    <div class="flex flex-col bg-slate-900 text-white min-h-screen">
        <Navbar />
        <section class="px-8">
            <slot />
        </section>
    </div>
</template>