<script setup>
defineProps({
  lang: { type: Object, required: true },
  delay: { type: Number, default: 0 },
});
</script>

<template>
  <div class="language-card glass-card reveal" :style="{ transitionDelay: `${delay}s` }">
    <img
      v-if="lang.flag"
      :src="lang.flag"
      :alt="`${lang.name} flag`"
      class="language-flag-img"
    />
    <div v-else class="language-flag-circle">{{ lang.code }}</div>

    <h4 style="font-size:1.1rem;margin-bottom:.2rem;">{{ lang.name }}</h4>
    <p style="margin-bottom:.7rem;">{{ lang.level }}</p>
    <div class="skill-progress-track">
      <div class="skill-progress-fill" :style="{ '--target-width': lang.percent + '%' }"></div>
    </div>
  </div>
</template>