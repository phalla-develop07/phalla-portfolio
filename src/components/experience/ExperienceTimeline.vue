<script setup>
defineProps({
  experience: { type: Array, required: true },
});
</script>

<template>
  <div class="timeline">
    <div
      v-for="(item, i) in experience"
      :key="item.id"
      class="timeline-item"
      :class="{ right: i % 2 === 1 }"
    >
      <div class="timeline-dot">
        <i class="fa-solid" :class="item.icon"></i>
      </div>
      <div class="timeline-card glass-card" :class="i % 2 === 0 ? 'reveal-left' : 'reveal-right'">
        <span class="timeline-date">{{ item.duration }} · {{ item.period }}</span>
        <h3 class="timeline-title">{{ item.title }}</h3>
        <p class="timeline-role">{{ item.role }}</p>
        <ul class="timeline-list">
          <li v-for="(point, idx) in item.points" :key="idx">{{ point }}</li>
        </ul>
        <div class="timeline-tools">
          <span v-for="tool in item.tools" :key="tool" class="tag-pill">{{ tool }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
