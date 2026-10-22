<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Memoji from "../assets/faviconMemoji.png";
import LlosiScreenshot from "../assets/llosiScreenshot.png";
import Steam from "./Steam.vue";
import TypingCursorEditor from "../components/TypingCursorEditor.vue";
import ToolsCarousel from "../components/ToolsCarousel.vue";
import { technologies } from "../data/technologies.ts";

const titleRef = ref<HTMLElement | null>(null);
const titles = ["a software engineer", "a Dev", "a Builder", "a Thinker"];
const currentTitle = ref(0);
const displayedText = ref("");

let initialInterval: number;
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

const handlePointerMove = (event: PointerEvent) => {
  const title = titleRef.value;

  // Only animate for mouse-like pointers.
  if (!title || event.pointerType !== "mouse") return;

  const rect = title.getBoundingClientRect();

  // Cursor position relative to the title's center.
  const dx = event.clientX - (rect.left + rect.width / 2);
  const dy = event.clientY - (rect.top + rect.height / 2);

  const distance = Math.hypot(dx, dy);
  const radius = 240;
  const maxOffset = 10;

  // Pull weakens as the cursor moves farther away.
  const strength = Math.max(0, 1 - distance / radius);

  const x = Math.max(-maxOffset, Math.min(maxOffset, dx * 0.12 * strength));

  const y = Math.max(-maxOffset, Math.min(maxOffset, dy * 0.12 * strength));

  title.style.transform = `translate(${x}px, ${y}px)`;
};

const resetTitle = () => {
  if (titleRef.value) {
    titleRef.value.style.transform = "translate(0, 0)";
  }
};

onMounted(() => {
  // Wait a little on page mount to let the blinking cursor shine
  initialInterval = setTimeout(() => {
    typeTitle();
  }, 2000);
  // typeTitle();
});

onUnmounted(() => {
  clearInterval(initialInterval);
  clearInterval(typingInterval);
});
</script>

<template>
  <section class="home">
    <div class="flex items-center justify-center">
      <img
        :src="Memoji"
        alt="Sodiq Memoji"
        class="h-32 w-32 rounded-full border-4 border-gray-950 shadow-lg object-cover"
      />
    </div>
    <div class="pt-8 pb-15">
      <h1 class="text-gray-500 font-bold text-4xl">
        Hey my name is <span class="text-white">Sodiq</span>!
        <!-- <div class="relative">
          <span class="absolute left-[0.5] top-1 text-yellow-500"> Sodiq </span>
          <span class="relative text-white"> Sodiq </span>
        </div> -->
      </h1>
      <p class="text-white font-bold text-4xl">
        <span class="text-gray-500">and I'm</span> > {{ displayedText
        }}<TypingCursorEditor />
      </p>
    </div>
    <p class="text-gray-300 pb-15">
      I'm a Full-Stack Software Engineer with 5+ years of professional
      experience building end-to-end software, from backend APIs and data
      systems to interactive frontend experiences with Vue.js and React. I like
      taking ideas apart, figuring out how they work, and turning them into
      something useful. That curiosity carries into my personal projects, where
      I get to experiment with new technologies and build things just for the
      fun of it. Outside of code, I'm into gaming, cars, PC building, art, and
      books. A bit of a mixed bag, but I think that's what keeps things
      interesting.
    </p>

    <div class="text-white text-center font-bold pb-4">My Tools</div>

    <ToolsCarousel :technologies="technologies" />

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

      <!-- Revamped Project Section -->
      <div class="flex flex-col gap-8">
        <div class="flex justify-around gap-4">
          <div class="flex flex-col justify-center">
            <section
              class="py-16"
              @pointermove="handlePointerMove"
              @pointerleave="resetTitle"
            >
              <h2
                ref="titleRef"
                class="flex justify-center text-white font-editorial text-6xl font-[1000] tracking-tight transition-transform duration-200 ease-out motion-reduce:transform-none! motion-reduce:transition-none"
              >
                Llosi
              </h2>
            </section>
            <p class="text-white text-center">
              A debt paypment simulator that let's you use different "What-If"
              scenarios and data visualizations to help plan
            </p>
          </div>
          <div class="flex flex-col justify-center">
            <img
              :src="LlosiScreenshot"
              alt="Llosi Screenshot"
              class="project-screenshot transition duration-300 ease-in-out hover:-translate-y-8 hover:scale-200"
            />
          </div>
        </div>
        <div>
          <img
            :src="LlosiScreenshot"
            alt="Llosi Screenshot"
            class="project-screenshot"
          />
        </div>
      </div>
      <!-- <ul class="flex flex-col">
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
      </ul> -->
    </div>
    <div>
      <Steam />
    </div>
  </section>
</template>

<style scoped></style>
