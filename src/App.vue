<template>
  <div class="flex flex-col min-h-screen">
  <!-- <div id="app" class="bg-gray-100 text-center py-10"> -->
    <header class="container fixed top-0 backdrop-blur-sm bg-gradient-to-b from-black-100 bg-opacity-50 bg-slate-800 z-50 py-2">
      <nav class="container mx-auto px-4 py-2 flex items-center justify-center">
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:text-white transition-colors duration-500 ease-in-out">Home</router-link></li>
          <!-- <li><router-link to="/about" class="hover:text-white transition-colors duration-500 ease-in-out">About</router-link></li> -->
          <li><router-link to="/projects" class="hover:text-white transition-colors duration-500 ease-in-out">Projects</router-link></li>
          <li><router-link to="/contact" class="hover:text-white transition-colors duration-500 ease-in-out">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <div class="pt-20">
      <main>
        <router-view />
      </main>
    </div>

    <footer class="bg-gray-800 text-white py-4 mt-auto">
      <div class="max-w-screen-md mx-auto text-left">
        <p>&copy; 2024 | Sodiq Odeyale</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// If you have any global states, imports, or functions, include them here.
</script>

<style scoped>
/* General styles for your App.vue */

/* #app {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} */

/* header {
  background-color: #333;
  color: white;
  padding: 1rem;
} */

/* nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
  justify-content: center;
  margin: 0;
  padding: 0;
} */

/* nav ul li {
  font-size: 1.2rem;
} */

/* nav ul li a {
  color: white;
  text-decoration: none;
} */

/* nav ul li a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
} */

/* main {
  flex: 1;
  padding: 2rem;
}

footer {
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  font-size: small;
  padding: 1rem;
  margin-top: auto;
} */
</style>
