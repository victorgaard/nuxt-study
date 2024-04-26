<script setup lang="ts">
import type { Product } from "~/types/global";

defineProps<Pick<Product, "name" | "weight">>();
</script>

<template>
  <p class="font-medium">
    {{ name }} <span class="text-slate-400">•</span> {{ formatWeight(weight) }}
  </p>
</template>
