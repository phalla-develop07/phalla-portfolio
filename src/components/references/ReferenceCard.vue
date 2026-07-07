<script setup>
import { initials } from "../../utils/formatters";

defineProps({
  reference: { type: Object, required: true },
  delay: { type: Number, default: 0 },
});
</script>

<template>
  <div class="reference-card glass-card reveal" :style="{ transitionDelay: `${delay}s` }">
    <img v-if="reference.photo" :src="reference.photo" class="reference-avatar" style="object-fit:cover;"
      :alt="reference.name" />
    <div v-else class="reference-avatar">{{ initials(reference.name) }}</div>
    <h4 style="font-size:1.1rem;margin-bottom:.2rem;">{{ reference.name }}</h4>
    <p style="color:var(--color-primary);font-weight:600;margin-bottom:.9rem;">{{ reference.position }}</p>
    <p style="font-size:.88rem;"><i class="fa-solid fa-phone me-2"></i>{{ reference.phone }}</p>
    <p style="font-size:.88rem;word-break:break-word;"><i class="fa-solid fa-envelope me-2"></i>{{ reference.email }}
    </p>
  </div>
</template>
