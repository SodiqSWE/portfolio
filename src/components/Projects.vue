<template>
    <section class="projects">
      <div>
        <p class="text-white font-bold pb-5 px-4">Projects</p>
        <ul class="flex flex-col">
          <li class="inset-4 hover:bg-gray-500 rounded-t-lg transition-colors duration-300 ease-in-out px-4">
            <a href="" target="_blank" class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4">
              <p class="text-white">Database ETL Tool</p>
              <p class="text-gray-300 text-sm">
                A Python program that extracts and transforms data from one database and loads it into another.
                Optimized for databases with 500k+ rows.
              </p>
            </a>
          </li>
          <li class="hover:bg-gray-500 transition-colors duration-300 ease-in-out px-4">
            <a href="https://github.com/SodiqSWE/forkify-sodiq" target="_blank" class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4">
              <p class="text-white">JWT Middleware</p>
              <p class="text-gray-300 text-sm">A Python JWT middleware for a FastAPI based service.</p>
            </a>
          </li>
          <li class="hover:bg-gray-500 transition-colors duration-300 ease-in-out px-4">
            <a href="https://github.com/SodiqSWE/forkify-sodiq" target="_blank" class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4">
              <p class="text-white">AWS Lambda SFTP function</p>
              <p class="text-gray-300 text-sm">
                Python SFTP program that runs in an AWS Lambda. It transfers and archives files from a remote file system to an AWS S3 bucket
                using the secure file transfer protocol.
              </p>
            </a>
          </li>
          <li class="hover:bg-gray-500 rounded-b-lg transition-colors duration-300 ease-in-out px-4">
            <a href="https://github.com/SodiqSWE/forkify-sodiq" target="_blank" class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4">
              <p class="text-white">Forkify</p>
              <p class="text-gray-300 text-sm">Javascript recipe app with cutom recipe upload capabilities.</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // const projects = [
  //   { name: 'Project 1', description: 'Description of project 1.', link: 'https://example.com/project1' },
  //   { name: 'Project 2', description: 'Description of project 2.', link: 'https://example.com/project2' },
  //   { name: 'Project 3', description: 'Description of project 3.', link: 'https://example.com/project3' },
  // ];
  </script>
  
  <style scoped>
  .projects {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  </style>
  