<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  color-scheme: dark;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.125s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  scale: 0.99;
}
</style>
