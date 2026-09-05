<script setup>
// global states, imports, or functions
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Glass Header  -->
    <header
      class="fixed top-0 z-50 m-0 w-full bg-linear-to-b from-black/80 to-gray-950/50 py-2 backdrop-blur-sm"
    >
      <!-- Nav Bar -->
      <nav class="mx-auto px-4 py-2 flex justify-center">
        <ul class="flex space-x-4">
          <li>
            <router-link
              to="/"
              class="text-white transition-colors duration-500 ease-in-out hover:text-gray-300"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/work"
              class="text-white transition-colors duration-500 ease-in-out hover:text-gray-300"
              >Work</router-link
            >
          </li>
          <li>
            <router-link
              to="/projects"
              class="text-white transition-colors duration-500 ease-in-out hover:text-gray-300"
              >Projects</router-link
            >
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main view -->
    <div class="pt-20">
      <main>
        <router-view />
      </main>
    </div>

    <!-- Footer -->
    <footer class="text-white py-4 mt-auto">
      <div class="max-w-3xl mx-auto text-left">
        <p>&copy; 2025 | Sodiq Odeyale</p>
        <a
          href="https://www.linkedin.com/in/abdul-sodiq-odeyale/"
          target="_blank"
          class="hover:text-blue-500"
        >
          <i
            class="devicon-linkedin-plain pr-2 transition-colors duration-500 ease-in-out"
          ></i>
        </a>
        <a
          href="https://github.com/SodiqSWE"
          target="_blank"
          class="hover:text-blue-500"
        >
          <i
            class="devicon-github-original pr-2 transition-colors duration-500 ease-in-out"
          ></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* General styles */
</style>
