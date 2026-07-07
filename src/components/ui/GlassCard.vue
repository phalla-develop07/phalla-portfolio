<script setup>
defineProps({
  tag: { type: String, default: "div" },
  hover: { type: Boolean, default: true },
  className: { type: String, default: "" },
});
</script>

<template>
  <component :is="tag" class="glass-card" :class="className">
    <slot />
  </component>
</template>
