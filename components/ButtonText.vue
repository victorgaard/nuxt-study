<script setup lang="ts">
defineProps(['props'])
</script>

<template>
    <button
v-bind="props" type="button"
        class="text-sm text-slate-400 mr-auto hover:text-emerald-400 flex items-center gap-1 focus:outline-emerald-500 outline-none focus:rounded">
        <slot />
    </button>
</template>