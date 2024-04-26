<script setup lang="ts">
import { MapPinIcon } from "@heroicons/vue/24/outline";
import type { Product } from "~/types/global";

type ProductCardRegionProps = Pick<Product, "region"> & {
  handleSearch: (event: MouseEvent, region: string) => void;
};

defineProps<ProductCardRegionProps>();
</script>

<template>
  <ButtonText @click="handleSearch($event, region)">
    <MapPinIcon class="h-3.5 w-3.5" />
    <slot />
  </ButtonText>
</template>
