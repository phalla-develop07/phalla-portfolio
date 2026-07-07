<script setup>
defineProps({
  item: { type: Object, required: true },
});
</script>

<template>
  <div class="education-card glass-card reveal">
    <div class="education-icon">
      <i class="fa-solid" :class="item.icon"></i>
    </div>
    <div>
      <span class="timeline-date">{{ item.period }}</span>
      <h3 class="timeline-title" style="font-size:1.25rem;">{{ item.degree }}</h3>
      <p class="timeline-role" style="margin-bottom:.6rem;">{{ item.school }}</p>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>
