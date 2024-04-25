<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

</script>

<template>
    <div class="flex items-center gap-4">
        <p class="font-medium"><slot /></p>
        <ArrowRightIcon class="hidden group-hover:block h-5 w-5 text-emerald-400" />
    </div>
</template>