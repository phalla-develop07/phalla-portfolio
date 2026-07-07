<script setup>
defineProps({
  name: { type: String, required: true },
  level: { type: Number, required: true },
});
</script>

<template>
  <div class="mb-3">
    <div class="skill-row">
      <span>{{ name }}</span>
      <span style="color:var(--color-primary)">{{ level }}%</span>
    </div>
    <div class="skill-progress-track">
      <div
        class="skill-progress-fill"
        :style="{ '--target-width': level + '%' }"
      ></div>
    </div>
  </div>
</template>
