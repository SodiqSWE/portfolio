<template>
    <section class="about">
      <div class="text-white text-left font-bold">Sodiq Odeyale</div>
      <div class="text-white text-left font-bold pb-4">Software Engineer</div>
      <p>
        Hi, I'm Sodiq! A software developer with 2+ years of experience creating scalable solutions, 
        from building APIs and ETL tools to designing frontends with Vue.js and React. 
        I enjoy collaborating remotely and exploring new tech like TypeScript in my personal projects. 
        Outside of work, I’m into gaming, cars, and PC building, which keeps my creativity and problem-solving skills sharp.
      </p>
      <p class="pb-10">
        When I'm not coding, you can find me exploring new tech trends, playing games,
        or enjoying a good anime series.
      </p>
      <div class="text-white text-center font-bold pb-4">My Tools</div>
      <div class="overflow-hidden bg-gray-900 py-4">
        <!-- Gradient Mask -->
        <div class="absolute top-0 left-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 pointer-events-none z-10 h-full w-full"></div>
        <div class="relative flex animate-scroll whitespace-nowrap space-x-8">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" class="h-16 inline-block">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue JS" class="h-16 inline-block">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" class="h-16 inline-block">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Logo 4" class="h-16 inline-block">
          <!-- <img src="logo5.png" alt="Logo 5" class="h-16 inline-block">
          <img src="logo6.png" alt="Logo 6" class="h-16 inline-block"> -->
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No logic needed for now
  </script>
  
  <style scoped>
  .about {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  /* h {
    text-align: left;
    margin-bottom: 1rem;
    color: aliceblue;
  } */

  /* h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: aliceblue;
  } */
  
  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: aliceblue;
  }
  </style>
  