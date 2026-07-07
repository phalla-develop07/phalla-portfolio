<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  accent: { type: String, default: "" },
  subtitle: { type: String, default: "" },
});
</script>

<template>
  <div class="section-title-wrap reveal">
    <span v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</span>
    <h2 class="section-title">
      {{ title }} <span v-if="accent" class="accent-text">{{ accent }}</span>
    </h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>
