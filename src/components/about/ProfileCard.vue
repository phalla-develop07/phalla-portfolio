<script setup>
defineProps({
  profile: { type: Object, required: true },
});
</script>

<template>
  <div class="about-photo-frame glass-card reveal-left">
    <img :src="profile.photo" :alt="profile.fullName" loading="lazy" />
  </div>
</template>
