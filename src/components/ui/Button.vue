<script setup>
defineProps({
  variant: { type: String, default: "gradient" }, // gradient | outline
  href: { type: String, default: "" },
  icon: { type: String, default: "" },
  tag: { type: String, default: "button" },
});
</script>

<template>
  <a v-if="href" :href="href" :class="variant === 'gradient' ? 'btn-gradient' : 'btn-outline-glass'">
    <i v-if="icon" :class="['fa-solid', icon]"></i>
    <slot />
  </a>
  <component
    v-else
    :is="tag"
    :class="variant === 'gradient' ? 'btn-gradient' : 'btn-outline-glass'"
  >
    <i v-if="icon" :class="['fa-solid', icon]"></i>
    <slot />
  </component>
</template>
