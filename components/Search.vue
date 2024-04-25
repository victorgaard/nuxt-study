<script setup lang="ts">
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline';
const search = defineModel()
</script>

<template>
    <div class="relative flex flex-col">
        <div v-if="!search" class="absolute left-1.5 top-[5px] flex items-center justify-center h-8 w-8 text-slate-400">
            <MagnifyingGlassIcon class="h-5 w-5" />
        </div>
        <button v-else @click="search = ''"
            class="absolute left-1.5 top-[5px] text-slate-400 flex items-center border border-slate-600 justify-center bg-slate-700 w-8 h-8 hover:bg-slate-600 transition-colors rounded-lg focus-within:outline-emerald-500 outline-none">
            <XMarkIcon class="h-5 w-5" />
        </button>
        <Input v-model="search" placeholder="Search for coffee, location, flavor profile..." id="search" class="pl-11"
            autocomplete="off" />
    </div>
</template>