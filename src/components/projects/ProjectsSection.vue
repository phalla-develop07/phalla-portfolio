<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import SectionTitle from "../ui/SectionTitle.vue";
import ProjectFilter from "./ProjectFilter.vue";
import ProjectCard from "./ProjectCard.vue";
import { projects, projectFilters } from "../../data/projects";
import { usePortfolioStore } from "../../store/portfolioStore";
import { useScrollAnimation } from "../../composables/useScrollAnimation";

const store = usePortfolioStore();
const { activeProjectFilter } = storeToRefs(store);
const { refreshObserver } = useScrollAnimation();

const filtered = computed(() => {
  if (activeProjectFilter.value === "All") return projects;
  return projects.filter((p) => p.category === activeProjectFilter.value);
});

function setFilter(filter) {
  store.setProjectFilter(filter);
  requestAnimationFrame(() => setTimeout(refreshObserver, 50));
}
</script>

<template>
  <section id="projects" class="section section-alt">
    <div class="container-xl">
      <SectionTitle
        eyebrow="Selected work"
        title="Featured"
        accent="Projects"
        subtitle="A few builds that show how I think through a problem, from schema to shipped UI."
      />
      <ProjectFilter :filters="projectFilters" :active="activeProjectFilter" @update:active="setFilter" />

      <div class="row g-4">
        <div v-for="(project, i) in filtered" :key="project.id" class="col-md-6 col-lg-4">
          <ProjectCard :project="project" :delay="i * 0.08" />
        </div>
      </div>
    </div>
  </section>
</template>
