<script setup lang="ts">
defineProps(['props'])
</script>

<template>
    <button
v-bind="props" type="button"
        class="hover:bg-emerald-400 text-xs hover:text-slate-900 text-slate-300 active:bg-emerald-500 rounded-lg bg-slate-800 px-2 py-0.5 focus-within:outline-emerald-500 outline-none">
        <slot />
    </button>
</template>