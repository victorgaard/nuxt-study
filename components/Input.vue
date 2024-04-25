<script setup lang="ts">
const model = defineModel()
</script>

<template>
    <input v-model="model" class="bg-slate-800 border text-sm border-slate-700 px-4 py-2.5 rounded-xl focus-within:outline-emerald-500 outline-none transition-all" />
</template>