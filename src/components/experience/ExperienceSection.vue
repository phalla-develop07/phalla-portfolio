<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import ExperienceTimeline from "./ExperienceTimeline.vue";
import { experience } from "../../data/experience";
</script>

<template>
  <section id="experience" class="section">
    <div class="container-xl">
      <SectionTitle
        eyebrow="Where I've built things"
        title="Project"
        accent="Experience"
        subtitle="Real projects, real deadlines — each one sharpened a different part of the stack."
      />
      <ExperienceTimeline :experience="experience" />
    </div>
  </section>
</template>
