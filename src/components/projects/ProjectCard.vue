<script setup>
defineProps({
  project: { type: Object, required: true },
  delay: { type: Number, default: 0 },
});
</script>

<template>
  <div class="project-card glass-card reveal" :style="{ transitionDelay: `${delay}s` }">
    <div class="project-thumb">
      <img :src="project.image" :alt="project.title" loading="lazy" />
      <div class="project-thumb-overlay">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener"
          class="icon-round-btn"
          :aria-label="`View ${project.title} source on GitHub`"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener"
          class="icon-round-btn"
          :aria-label="`View ${project.title} live demo`"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
    <div class="project-body">
      <span class="tag-pill mb-2" style="width:fit-content;">{{ project.category }}</span>
      <h3 style="font-size:1.15rem;margin:.5rem 0;">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-tech-list">
        <span v-for="t in project.tech" :key="t" class="tag-pill" style="background:rgba(var(--color-primary-rgb),.1);color:var(--color-primary);">{{ t }}</span>
      </div>
    </div>
  </div>
</template>
