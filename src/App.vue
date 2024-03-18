<script setup>
import { ref, watchEffect } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Footer from './components/Footer.vue'

const isMobileMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Watch the route changes and update the document title
watchEffect(() => {
  document.title = route.meta.title || 'Nihir Zala - Full-stack Laravel developer'
})
</script>

<template>
  <header class="h-20 flex items-center bg-white/80  backdrop-blur-md sticky top-0 z-10">
    <div class="w-full max-w-4xl px-4 mx-auto flex items-center">
      <div class="flex-1">
        <RouterLink
          class="block h-14 w-14 relative rounded-full border-2 border-white  group shadow"
          to="/"
        >
          <img
            class="absolute inset-0 rounded-full group-hover:opacity-80 transition-all duration-150"
            src="@/assets/nihirzala.webp"
            alt="Nihir Zala"
          />
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden text-gray-500  focus:outline-none"
        @click="toggleMobileMenu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <!-- Navigation Links -->
      <nav class="hidden lg:flex-1 lg:flex lg:items-center lg:justify-center">
        <ul class="flex justify-center gap-6">
          <li>
            <RouterLink
              to="/"
              class="font-medium py-1 hover:text-gray-900   text-gray-500 border-transparent ml-5"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              class="font-medium py-1 hover:text-gray-900   text-gray-500 border-transparent"
            >
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/articles"
              class="font-medium py-1 hover:text-gray-900   text-gray-500 border-transparent"
            >
              Articles
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact-us"
              class="font-medium py-1 hover:text-gray-900   text-gray-500 border-transparent"
            >
              Contact
            </RouterLink>
          </li> 
          <!-- <li>
            <a
            href="https://github.com/Nihirz/nihirzala-vue-portfolio/raw/main/nihir-zala-laravel-developer.pdf"
              class="font-small py-1 hover:text-gray-900   text-gray-500 border-transparent "
            >
              Download&nbsp;CV
            </a>
          </li> -->
        </ul>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="lg:hidden absolute top-20 left-0 right-0 bg-white  border-b border-gray-200  shadow-md"
      >
        <ul class="flex flex-col items-center py-4">
          <li>
            <RouterLink
              to="/"
              class="font-medium py-1 hover:text-gray-900   text-gray-500"
              @click="closeMobileMenu"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              class="font-medium py-1 hover:text-gray-900   text-gray-500"
              @click="closeMobileMenu"
            >
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/articles"
              class="font-medium py-1 hover:text-gray-900   text-gray-500"
              @click="closeMobileMenu"
            >
              Articles
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact-us"
              class="font-medium py-1 hover:text-gray-900   text-gray-500"
              @click="closeMobileMenu"
            >
              Contact
            </RouterLink>
          </li>
          <!-- <li>
            <a
            href="https://github.com/Nihirz/nihirzala-vue-portfolio/raw/main/nihir-zala-laravel-developer.pdf"
              class="font-medium py-1 hover:text-gray-900   text-gray-500 border-transparent ml-5"
            >
            Download&nbsp;CV
            </a>
          </li> -->
        </ul>
      </div>

      <!-- Dark Mode Toggle -->
      <div class="lg:flex-1 lg:flex lg:gap-4 lg:items-center lg:justify-end"></div>
    </div>
  </header>

  <!-- RouterView for rendering the current route component -->
  <RouterView />

  <!-- Footer -->
  <Footer />
</template>

<style>
a.router-link-active.router-link-exact-active {
  text-decoration: underline;
  opacity: 1;
  color: #5A5A5A;
}
ul.flex.flex-col.items-center.py-4 li { margin-top: 20px; padding: 5px; }
</style>
