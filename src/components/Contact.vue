<template>
    <section class="contact">
      <h1>Contact Me</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Your Name" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Your Email" />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    message: '',
  });
  
  const handleSubmit = () => {
    alert(`Thank you, ${formData.value.name}! Your message has been sent.`);
  };
  </script>
  
  <style scoped>
  .contact {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
  
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
  