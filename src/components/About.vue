<template>
    <section class="about">
      <div class="flex items-center justify-center">
        <img src="../assets/memoji2.jpg" alt="Sodiq Memoji" class="h-32 w-32 rounded-full border-4 border-gray-950 shadow-lg object-cover">
      </div>
      <div class="text-white text-left font-bold">Sodiq Odeyale</div>
      <div class="text-white text-left font-bold pb-4">Software Engineer</div>
      <p class="text-gray-300 pb-2">
        Hi, I'm Sodiq! A software developer with 4+ years of professional experience creating scalable solutions, 
        from building backend APIs, ETL tools and CRUD systems, to designing frontends with Javascript frameworks like Vue.js and React. 
        I enjoy collaborating with a team and exploring new tech in my personal projects. 
        Outside of work, I’m into gaming, cars, and PC building, which keeps my creativity and problem-solving skills sharp.
      </p>
      <p class="pb-20 text-gray-300">
        When I'm not coding, you can find me exploring new tech trends, playing games,
        or enjoying a good anime series.
      </p>

      <div class="text-white text-center font-bold pb-4">My Tools</div>
      
      <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] pb-20">
        <ul class="relative flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Typescript" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue JS" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwindcss" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" alt="GraphQL" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" class="h-16 inline-block">
          </li>
        </ul>
        <ul class="relative flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Typescript" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue JS" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwindcss" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" alt="GraphQL" class="h-16 inline-block">
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" class="h-16 inline-block">
          </li>
        </ul>
      </div>
      <div class="pb-20">
        <div class="flex flex-wrap items-center gap-y-2 justify-between pb-5">
          <p class="text-white font-bold space-y-4">Work</p>
          <router-link to="/work" class="text-gray-300 transition-colors duration-500 ease-in-out hover:text-white">See All Work</router-link>
        </div>
        <ul>
          <li class="pb-5">
            <div class="text-gray-300 font-semi-bold">Freedom Technology Solutions Group, LLC</div>
            <div class="text-gray-300 text-sm opacity-75">Software Enginer</div>
            <div class="text-gray-300 text-sm opacity-75 pb-5">Jun 2022 - Present</div>
            <article>
              <p class="text-gray-300">
                Currently I am a FullStack software engineer at Freedom Technology Solutions Group where we are on a classified TS government
                contract with the Navy modernizing a legacy web application.
              </p>
            </article>
          </li>
          <li>
            <div class="text-gray-300 font-semi-bold">NetImpact Strategies Inc.</div>
            <div class="text-gray-300 text-sm opacity-75">IT Specialist</div>
            <div class="text-gray-300 text-sm opacity-75 pb-5">Feb 2021 - Jun 2022</div>
            <article>
              <p class="text-gray-300">
                Assisted Federal employees with IT related problems such as software installations, hardware and software (Windows, Mac OS, IOS, etc.) troubleshooting.
              </p>
            </article>
          </li>
        </ul>
      </div>
      <div class="pb-20">
        <div class="flex flex-wrap items-center gap-y-2 justify-between pb-5">
          <p class="text-white font-bold space-y-4">Projects</p>
          <router-link to="/projects" class="text-gray-300 transition-colors duration-500 ease-in-out hover:text-white">See All Projects</router-link>
        </div>
        <ul class="flex flex-col">
          <li class="inset-4 hover:bg-gray-600 rounded-t-lg transition-colors duration-300 ease-in-out px-4">
            <a href="" target="_blank" class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4">
              <p class="text-white">Database ETL Tool</p>
              <p class="text-gray-300 text-sm">
                A Python program that extracts and transforms data from one database and loads it into another.
                Optimized for databases with 500k+ rows.
              </p>
            </a>
          </li>
          <li class="hover:bg-gray-600 transition-colors duration-300 ease-in-out px-4">
            <a href="https://github.com/SodiqSWE/forkify-sodiq" target="_blank" class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4">
              <p class="text-white">JWT Middleware</p>
              <p class="text-gray-300 text-sm">A Python JWT middleware for a FastAPI based service.</p>
            </a>
          </li>
          <li class="hover:bg-gray-600 rounded-b-lg transition-colors duration-300 ease-in-out px-4">
            <a href="https://github.com/SodiqSWE/forkify-sodiq" target="_blank" class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4">
              <p class="text-white">Forkify</p>
              <p class="text-gray-300 text-sm">Javascript recipe app with cutom recipe upload capabilities.</p>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Steam />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import Steam from './Steam.vue';
  

  </script>
  
  <style scoped>
  .about {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  </style>
  