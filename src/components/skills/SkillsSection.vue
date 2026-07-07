<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import SkillCard from "./SkillCard.vue";
import { skillCategories, softSkills } from "../../data/skills";
</script>

<template>
  <section id="skills" class="section section-alt">
    <div class="container-xl">
      <SectionTitle
        eyebrow="What I work with"
        title="Skills &"
        accent="Expertise"
        subtitle="A practical toolkit built through real projects — from database schema to deployed interface."
      />

      <div class="row g-4 mb-5">
        <div v-for="(cat, i) in skillCategories" :key="cat.id" class="col-md-4">
          <SkillCard :category="cat" :delay="i * 0.1" />
        </div>
      </div>

      <h3 class="text-center mb-4 reveal" style="font-size:1.3rem;">Soft Skills</h3>
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <div
          v-for="(s, i) in softSkills"
          :key="s.name"
          class="glass-card reveal d-flex align-items-center gap-2"
          :style="{ padding: '0.8rem 1.3rem', transitionDelay: `${i * 0.05}s` }"
        >
          <i class="fa-solid" :class="s.icon" style="color:var(--color-primary)"></i>
          <span style="font-weight:600;font-size:.92rem;">{{ s.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
