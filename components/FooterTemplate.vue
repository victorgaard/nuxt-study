<template>
  <div
    class="pt-32 pb-12 px-8 bg-gradient-to-t from-slate-800 via-slate-800/30 flex items-center justify-between text-sm text-slate-400"
  >
    <p>
      Vue3 + Nuxt study by
      <NuxtLink
        alt="Check my work"
        to="https://victorsantos.work/"
        target="_blank"
        class="text-emerald-400 hover:underline underline-offset-2 decoration-dashed hover:underline-offset-4 transition-all"
      >
        Victor</NuxtLink
      >.
    </p>
    <NuxtLink
      alt="Go to GitHub repo"
      to="https://github.com/victorgaard/nuxt-study"
      class="text-emerald-400 group translate-x-[106px] hover:translate-x-0 hover:text-emerald-300 transition-all flex items-center gap-2"
      target="_blank"
    >
      <GithubIcon /><span
        class="opacity-0 group-hover:opacity-100 transition-opacity"
        >Check the repo</span
      >
    </NuxtLink>
  </div>
</template>
