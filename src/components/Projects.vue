<template>
    <section class="projects">
      <div>
        <p class="text-white font-bold space-y-4 pb-5">Projects</p>
        <ul class="flex flex-col rounded-t-lg group-hover:bg-zinc-200 transition-colors duration-300 ease-in-out">
          <li>
            <a href="" target="_blank" class="block border-b border-zinc-200 border-opacity-60 py-4">
              <p class="text-white group-hover:bg-zinc-200 transition-colors duration-300 ease-in-out">Project 1</p>
              <p class="text-gray-300 text-sm">project description</p>
            </a>
          </li>
          <li>
            <a href="" target="_blank" class="block border-b border-zinc-200 border-opacity-60 py-4">
              <p class="text-white">Project 2</p>
              <p class="text-gray-300 text-sm">project description</p>
            </a>
          </li>
        </ul>
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
    max-width: 800px;
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
  