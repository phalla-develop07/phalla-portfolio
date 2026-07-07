<script setup>
defineProps({
  interest: { type: Object, required: true },
  delay: { type: Number, default: 0 },
});
</script>

<template>
  <div class="glass-card reveal d-flex align-items-center gap-2" :style="{ padding: '0.8rem 1.3rem', transitionDelay: `${delay}s` }">
    <i class="fa-solid" :class="interest.icon" style="color:var(--color-accent)"></i>
    <span style="font-weight:600;font-size:.92rem;">{{ interest.name }}</span>
  </div>
</template>
