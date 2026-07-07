<script setup>
defineProps({
  text: { type: String, required: true },
  icon: { type: String, default: "" },
});
</script>

<template>
  <span class="tag-pill">
    <i v-if="icon" :class="['fa-solid', icon, 'me-1']"></i>{{ text }}
  </span>
</template>
