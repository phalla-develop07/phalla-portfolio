<script setup>
defineProps({
  hobby: { type: Object, required: true },
  delay: { type: Number, default: 0 },
});
</script>

<template>
  <div class="hobby-card glass-card reveal" :style="{ transitionDelay: `${delay}s` }">
    <div class="skill-icon-badge">
      <i class="fa-solid" :class="hobby.icon"></i>
    </div>
    <h4 style="font-size:1.05rem;margin-bottom:.4rem;">{{ hobby.name }}</h4>
    <p>{{ hobby.description }}</p>
  </div>
</template>
