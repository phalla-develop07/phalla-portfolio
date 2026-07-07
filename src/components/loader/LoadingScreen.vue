<script setup>
import { ref, onMounted } from "vue";
import { usePortfolioStore } from "../../store/portfolioStore";

const store = usePortfolioStore();
const hidden = ref(false);

onMounted(() => {
  setTimeout(() => {
    hidden.value = true;
    store.finishLoading();
  }, 1100);
});
</script>

<template>
  <div class="loading-screen" :class="{ hidden }" role="status" aria-live="polite">
    <div class="loader-ring" aria-hidden="true"></div>
    <span class="loader-text">Phalla Suong</span>
  </div>
</template>
