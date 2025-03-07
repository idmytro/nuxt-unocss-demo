<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const msg = 'Nuxt + Unocss'
</script>

<template>
  <div class="HelloWorld text-center">
    <div class="flex items-center justify-center gap-48px">
      <a
        href="https://nuxt.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="i-custom-nuxt-green h-120px w-120px filter transition-filter duration-300 will-change-filter hover:drop-shadow-[0_0_2em_#42b883aa]"
      >
        <span class="invisible">Nuxt</span>
      </a>
      <a
        href="https://unocss.dev/"
        target="_blank"
        rel="noopener noreferrer"
        class="i-custom-unocss h-96px w-96px filter transition-filter duration-300 will-change-filter hover:drop-shadow-[0_0_2em_#c76dd1aa]"
      >
        <span class="invisible">Unocss</span>
      </a>
    </div>

    <h1 class="text-3.2em leading-[1.1]">
      {{ msg }}
    </h1>

    <div class="p-2em">
      <button
        type="button"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p>
        Edit
        <code>components/HelloWorld/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p class="text-[#888]">
      Click on the Nuxt and Unocss logos to learn more
    </p>
  </div>
</template>

<style>
/* .HelloWorld {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
} */
</style>
