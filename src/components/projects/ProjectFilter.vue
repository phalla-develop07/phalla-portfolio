<script setup>
defineProps({
  filters: { type: Array, required: true },
  active: { type: String, required: true },
});
defineEmits(["update:active"]);
</script>

<template>
  <div class="project-filter-bar reveal">
    <button
      v-for="filter in filters"
      :key="filter"
      type="button"
      class="filter-chip"
      :class="{ active: active === filter }"
      @click="$emit('update:active', filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>
