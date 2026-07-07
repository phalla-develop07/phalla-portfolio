<script setup>
import { useTheme } from "../../composables/useTheme";

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button
    class="theme-toggle-btn"
    type="button"
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <i class="fa-solid" :class="isDark ? 'fa-sun' : 'fa-moon'"></i>
  </button>
</template>
