<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Steam from "./Steam.vue";
import TypingCursorEditor from "../components/TypingCursorEditor.vue";

const titles = ["a software engineer", "a Dev", "a Builder", "a Thinker"];
const currentTitle = ref(0);
const displayedText = ref("");

let typingInterval: number;

const typeTitle = () => {
  const title = titles[currentTitle.value];
  let charIndex = 0;

  typingInterval = window.setInterval(() => {
    if (charIndex < title.length) {
      displayedText.value += title[charIndex];
      charIndex++;
    } else {
      clearInterval(typingInterval);

      // Pause after finishing the word
      window.setTimeout(deleteTitle, 1500);
    }
  }, 100);
};

const deleteTitle = () => {
  typingInterval = window.setInterval(() => {
    if (displayedText.value.length > 0) {
      displayedText.value = displayedText.value.slice(0, -1);
    } else {
      clearInterval(typingInterval);

      // Move to the next title
      currentTitle.value = (currentTitle.value + 1) % titles.length;

      // Short pause before typing again
      window.setTimeout(typeTitle, 500);
    }
  }, 60);
};

onMounted(() => {
  typeTitle();
});

onUnmounted(() => {
  clearInterval(typingInterval);
});
</script>

<template>
  <section class="home">
    <div class="flex items-center justify-center">
      <img
        src="../assets/memoji2.jpg"
        alt="Sodiq Memoji"
        class="h-32 w-32 rounded-full border-4 border-gray-950 shadow-lg object-cover"
      />
    </div>
    <div class="pt-8 pb-15">
      <h1 class="text-gray-500 font-bold text-4xl">
        Hey my name is <span class="text-white">Sodiq</span>!
      </h1>
      <p class="text-white font-bold text-4xl">
        <span class="text-gray-500">and I'm</span> > {{ displayedText
        }}<TypingCursorEditor />
      </p>
    </div>
    <p class="text-gray-300 pb-2">
      I'm a FullStack Software Engineer with 5+ years of professional experience
      creating and developing end to end scalable solutions, from building
      backend APIs, DB ETL tools and CRUD systems, to designing frontend
      experiences with Javascript frameworks like Vue.js and React. I enjoy
      collaborating with a team and exploring new tech in my personal projects.
      Outside of work, I’m into gaming, cars, PC building, art, and books which
      keeps my creativity and problem-solving skills sharp.
    </p>
    <p class="pb-20 text-gray-300">
      When I'm not coding, you can find me exploring new tech trends, playing
      games, or enjoying a good anime series among a plethora of things
    </p>

    <div class="text-white text-center font-bold pb-4">My Tools</div>

    <div
      class="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)] pb-20"
    >
      <ul
        class="relative flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll"
      >
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="Typescript"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="Javascript"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
            alt="Vue JS"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            alt="Tailwindcss"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
            alt="GraphQL"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS"
            class="h-16 inline-block"
          />
        </li>
      </ul>
      <ul
        class="relative flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll"
        aria-hidden="true"
      >
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="Typescript"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="Javascript"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
            alt="Vue JS"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            alt="Tailwindcss"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
            alt="GraphQL"
            class="h-16 inline-block"
          />
        </li>
        <li>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS"
            class="h-16 inline-block"
          />
        </li>
      </ul>
    </div>
    <div class="pb-20">
      <div class="flex flex-wrap items-center gap-y-2 justify-between pb-5">
        <p class="text-white font-bold space-y-4">Work</p>
        <router-link
          to="/work"
          class="text-gray-300 transition-colors duration-500 ease-in-out hover:text-white"
          >See All Work</router-link
        >
      </div>
      <ul>
        <li class="pb-5">
          <div class="text-gray-300 font-semi-bold">
            Freedom Technology Solutions Group, LLC
          </div>
          <div class="text-gray-300 text-sm opacity-75">Software Engineer</div>
          <div class="text-gray-300 text-sm opacity-75 pb-5">
            Jun 2022 - Present
          </div>
          <article>
            <p class="text-gray-300">
              Currently I am a FullStack Software Engineer at Freedom Technology
              Solutions Group where I work on classified TS government contracts
              building awesome software solutions.
            </p>
          </article>
        </li>
        <li>
          <div class="text-gray-300 font-semi-bold">
            NetImpact Strategies Inc.
          </div>
          <div class="text-gray-300 text-sm opacity-75">IT Specialist</div>
          <div class="text-gray-300 text-sm opacity-75 pb-5">
            Feb 2021 - Jun 2022
          </div>
          <article>
            <p class="text-gray-300">
              Assisted Federal employees with IT related problems such as
              software installations, hardware and software (Windows, Mac OS,
              IOS, etc.) troubleshooting.
            </p>
          </article>
        </li>
      </ul>
    </div>
    <div class="pb-20">
      <div class="flex flex-wrap items-center gap-y-2 justify-between pb-5">
        <p class="text-white font-bold space-y-4">Projects</p>
        <router-link
          to="/projects"
          class="text-gray-300 transition-colors duration-500 ease-in-out hover:text-white"
          >See All Projects</router-link
        >
      </div>
      <ul class="flex flex-col">
        <li
          class="inset-4 hover:bg-gray-600 rounded-t-lg transition-colors duration-300 ease-in-out px-4"
        >
          <a
            href=""
            target="_blank"
            class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4"
          >
            <p class="text-white">Database ETL Tool</p>
            <p class="text-gray-300 text-sm">
              A Python program that extracts and transforms data from one
              database and loads it into another. Optimized for databases with
              500k+ rows.
            </p>
          </a>
        </li>
        <li
          class="hover:bg-gray-600 transition-colors duration-300 ease-in-out px-4"
        >
          <a
            href="https://github.com/SodiqSWE/forkify-sodiq"
            target="_blank"
            class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4"
          >
            <p class="text-white">JWT Middleware</p>
            <p class="text-gray-300 text-sm">
              A Python JWT middleware for a FastAPI based service.
            </p>
          </a>
        </li>
        <li
          class="hover:bg-gray-600 rounded-b-lg transition-colors duration-300 ease-in-out px-4"
        >
          <a
            href="https://github.com/SodiqSWE/forkify-sodiq"
            target="_blank"
            class="block border-b border-gray-300 hover:border-opacity-0 border-opacity-30 transition-colors duration-300 ease-in-out py-4"
          >
            <p class="text-white">Forkify</p>
            <p class="text-gray-300 text-sm">
              Javascript recipe app with custom recipe upload capabilities.
            </p>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <Steam />
    </div>
  </section>
</template>

<style scoped></style>
