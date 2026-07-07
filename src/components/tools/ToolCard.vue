<script setup>
defineProps({
  tool: { type: Object, required: true },
  delay: { type: Number, default: 0 },
});

const brandIcons = ["fa-wordpress", "fa-figma", "fa-aws", "fa-git-alt", "fa-github", "fa-jira"];
</script>

<template>
  <div class="tool-card glass-card reveal text-center" :style="{ transitionDelay: `${delay}s` }">
    <div class="tool-icon-badge mx-auto">
      <i :class="[brandIcons.includes(tool.icon) ? 'fa-brands' : 'fa-solid', tool.icon]"></i>
    </div>
    <h4 style="font-size:1rem;font-weight:700;">{{ tool.name }}</h4>
  </div>
</template>
