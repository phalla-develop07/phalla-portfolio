<script setup>
import SkillProgress from "./SkillProgress.vue";

defineProps({
  category: { type: Object, required: true },
  delay: { type: Number, default: 0 },
});
</script>

<template>
  <div class="skill-card glass-card reveal" :style="{ transitionDelay: `${delay}s` }">
    <div class="skill-icon-badge">
      <i class="fa-solid" :class="category.icon"></i>
    </div>
    <h3 class="mb-3" style="font-size:1.2rem;">{{ category.title }}</h3>
    <SkillProgress v-for="s in category.skills" :key="s.name" :name="s.name" :level="s.level" />
  </div>
</template>
