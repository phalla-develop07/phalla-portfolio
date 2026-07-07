<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import ScrollProgress from "./components/layout/ScrollProgress.vue";
import LoadingScreen from "./components/loader/LoadingScreen.vue";
import { useCustomCursor } from "./composables/useCustomCursor";

useCustomCursor();
</script>

<template>
  <LoadingScreen />
  <ScrollProgress />
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
