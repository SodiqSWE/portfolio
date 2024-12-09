<template>
    <section class="projects">
      <h1>My Projects</h1>
      <div class="project-list">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">View Project</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const projects = [
    { name: 'Project 1', description: 'Description of project 1.', link: 'https://example.com/project1' },
    { name: 'Project 2', description: 'Description of project 2.', link: 'https://example.com/project2' },
    { name: 'Project 3', description: 'Description of project 3.', link: 'https://example.com/project3' },
  ];
  </script>
  
  <style scoped>
  .projects {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .project-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
  }
  
  .project-card h2 {
    margin: 0.5rem 0;
  }
  
  .project-card a {
    color: #007BFF;
    text-decoration: none;
  }
  
  .project-card a:hover {
    text-decoration: underline;
  }
  </style>
  