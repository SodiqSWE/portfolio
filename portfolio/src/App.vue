<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 | Sodiq Odeyale</p>
    </footer>
  </div>
</template>

<script setup>
// If you have any global states, imports, or functions, include them here.
</script>

<style scoped>
/* General styles for your App.vue */

#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
  justify-content: center;
  margin: 0;
  padding: 0;
}

nav ul li {
  font-size: 1.2rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

main {
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
}
</style>
