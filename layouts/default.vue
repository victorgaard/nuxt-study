<script setup lang="ts">
useSeoMeta({
  title: "Nuxt coffee shop",
  ogTitle: "Nuxt coffee shop",
  description: "Browse our fine selection of coffees.",
  ogDescription: "Browse our fine selection of coffees.",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div
    class="flex flex-col justify-between selection:bg-amber-600 bg-slate-950/95 text-white min-h-dvh overflow-clip"
  >
    <div>
      <NavbarItems />
      <section class="px-4 sm:px-8">
        <slot />
      </section>
    </div>
    <FooterTemplate />
  </div>
</template>
