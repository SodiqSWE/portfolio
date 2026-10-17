<script setup lang="ts">
interface Technology {
  src: string;
  alt: string;
}

defineProps<{ technologies: Technology[] }>();
</script>
<template>
  <div
    class="inline-flex w-full flex-nowrap overflow-hidden pb-20 mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]"
  >
    <!-- First track -->
    <ul
      class="relative flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll"
    >
      <li v-for="technology in technologies" :key="technology.alt">
        <img
          :src="technology.src"
          :alt="technology.alt"
          class="inline-block h-16"
        />
      </li>
    </ul>

    <!-- Duplicate track for infinite scrolling -->
    <ul
      class="relative flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll"
      aria-hidden="true"
    >
      <li v-for="technology in technologies" :key="technology.alt">
        <img
          :src="technology.src"
          :alt="technology.alt"
          class="inline-block h-16"
        />
      </li>
    </ul>
  </div>
</template>
