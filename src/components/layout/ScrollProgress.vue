<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const progress = ref(0);

function handleScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
}

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <div class="scroll-progress-bar" :style="{ width: progress + '%' }" aria-hidden="true"></div>
</template>
