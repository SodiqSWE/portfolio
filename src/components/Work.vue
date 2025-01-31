<template>
    <section class="contact">
      <div>
        <div class="flex flex-wrap items-center gap-y-2 justify-between pb-5">
          <p class="text-white font-bold space-y-4">Work</p>
        </div>
        <ul>
          <li class="pb-5">
            <div class="text-white font-semi-bold">Freedom Technology Solutions Group, LLC</div>
            <div class="text-gray-300 text-sm opacity-75">Software Enginer</div>
            <div class="text-gray-300 text-sm opacity-75 pb-5">Jun 2022 - Present</div>
            <article>
              <p class="text-gray-300 opacity-90">
                Currently I am a FullStack Software Engineer at Freedom Technology Solutions Group where we are on a classified TS government
                contract with the Navy modernizing a legacy application from the ground up.
                <br>
                <br>
                &#10022; Built an ETL (Extract Transform Load) tool for extracting and transforming data from an old Oracle
                  database to a PostgreSQL database with optimization implementations for database tables that have over 500k+ rows.
                <br>
                &#10022; Used the FastAPI framework to create APIs that leverage GraphQL and SQLAlchemy for performant and efficient 
                database queries.
                <br>
                &#10022; Created a Python JWT middleware that authenticates and decodes tokens from the authentication header for 
                role based access control.
              </p>
            </article>
          </li>
          <li>
            <div class="text-white font-semi-bold">NetImpact Strategies Inc.</div>
            <div class="text-gray-300 text-sm opacity-75">IT Specialist</div>
            <div class="text-gray-300 text-sm opacity-75 pb-5">Feb 2021 - Jun 2022</div>
            <article>
              <p class="text-gray-300 opacity-90">
                Assisted Federal employees with IT related problems such as software installations, hardware and software (Windows, Mac OS, IOS, etc.) troubleshooting.
                <br>
                <br>
                &#10022; Assist customers in resolving technical problems with Windows, Mac OS, software, and mobile apps using automated shell scripts 
                I created to speed up incident resolution.
                <br>
                &#10022; Provided first contact for a customer base of over 16,000 Federal employees with IT incidents and
                requests via phone call, email, and web ticket submission.
                <br>
                &#10022; Utilized MDM software to remote into customer devices and performed IT services.
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
 
  
  </script>
  
  <style scoped>
  .contact {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  /* article {
    font-family: lora, ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
  } */

  form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.7rem;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  