<script setup lang="ts">
defineProps(['props'])
</script>

<template>
    <button v-bind="props"
        class="text-sm text-slate-400 hover:text-emerald-400 flex items-center gap-1 focus-within:outline-emerald-500 outline-none focus-within:rounded">
        <slot />
    </button>
</template>