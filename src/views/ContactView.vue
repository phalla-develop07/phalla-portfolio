<script setup>
import ContactSection from "../components/contact/ContactSection.vue";
import { useScrollAnimation } from "../composables/useScrollAnimation";

useScrollAnimation();
</script>

<template>
  <div style="padding-top:2rem;">
    <ContactSection />
  </div>
</template>
