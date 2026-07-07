<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
import ThemeToggle from "./ThemeToggle.vue";
import { NAV_LINKS } from "../../utils/constants";
import { smoothScrollTo } from "../../utils/animations";
import { profile } from "../../data/profile";

const scrolled = ref(false);
const mobileOpen = ref(false);

function handleScroll() {
  scrolled.value = window.scrollY > 40;
}

function navigate(id) {
  mobileOpen.value = false;
  smoothScrollTo(id);
}

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <header class="app-navbar" :class="{ scrolled }">
    <div class="container-xl navbar-inner">
      <RouterLink to="/" class="brand-logo" @click="mobileOpen = false">
        {{ profile.firstName }}<span>.dev</span>
      </RouterLink>

      <nav>
        <ul class="nav-links" :class="{ open: mobileOpen }">
          <li v-for="link in NAV_LINKS" :key="link.to">
            <a href="#" @click.prevent="navigate(link.to)">{{ link.label }}</a>
          </li>
          <li>
            <RouterLink to="/resume" @click="mobileOpen = false">Resume</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="nav-actions">
        <ThemeToggle />
        <button
          class="nav-burger"
          type="button"
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation menu"
        >
          <i class="fa-solid" :class="mobileOpen ? 'fa-xmark' : 'fa-bars'"></i>
        </button>
      </div>
    </div>
  </header>
</template>
