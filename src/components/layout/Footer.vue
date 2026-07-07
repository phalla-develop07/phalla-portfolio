<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { profile } from "../../data/profile";
import { currentYear } from "../../utils/formatters";

const showTop = ref(false);

function handleScroll() {
  showTop.value = window.scrollY > 500;
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));

const socials = [
  { icon: "fa-brands fa-github", href: profile.github, label: "GitHub" },
  { icon: "fa-brands fa-linkedin-in", href: profile.linkedin, label: "LinkedIn" },
  { icon: "fa-solid fa-envelope", href: `mailto:${profile.email}`, label: "Email" },
];
</script>

<template>
  <footer class="app-footer">
    <div class="container-xl">
      <div class="brand-logo mb-3 d-flex justify-content-center">
        {{ profile.firstName }}<span>.dev</span>
      </div>
      <div class="hero-socials justify-content-center mb-3">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noopener"
          class="hero-social-link"
          :aria-label="s.label"
        >
          <i :class="s.icon"></i>
        </a>
      </div>
      <p class="mb-0">© {{ currentYear() }} {{ profile.fullName }}. Built with Vue 3 &amp; a lot of coffee.</p>
    </div>

    <button
      class="back-to-top"
      :class="{ visible: showTop }"
      type="button"
      @click="scrollTop"
      aria-label="Back to top"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </footer>
</template>
