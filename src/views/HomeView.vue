<script setup>
import { onMounted } from "vue";
import HeroSection from "../components/hero/HeroSection.vue";
import AboutSection from "../components/about/AboutSection.vue";
import SkillsSection from "../components/skills/SkillsSection.vue";
import InterestsSection from "../components/interests/InterestsSection.vue";
import ToolsSection from "../components/tools/ToolsSection.vue";
import ExperienceSection from "../components/experience/ExperienceSection.vue";
import EducationSection from "../components/education/EducationSection.vue";
import ProjectsSection from "../components/projects/ProjectsSection.vue";
import AchievementsSection from "../components/achievements/AchievementsSection.vue";
import HireMeSection from "../components/hire/HireMeSection.vue";
import LanguagesSection from "../components/languages/LanguagesSection.vue";
import HobbiesSection from "../components/hobbies/HobbiesSection.vue";
import ReferencesSection from "../components/references/ReferencesSection.vue";
import ContactSection from "../components/contact/ContactSection.vue";
import { useScrollAnimation } from "../composables/useScrollAnimation";

useScrollAnimation();

onMounted(() => {
  // Handle deep-link hash on load (e.g. /#contact from another view)
  if (window.location.hash) {
    const id = window.location.hash.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }
});
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <InterestsSection />
    <ToolsSection />
    <ExperienceSection />
    <EducationSection />
    <ProjectsSection />
    <AchievementsSection />
    <HireMeSection />
    <LanguagesSection />
    <HobbiesSection />
    <ReferencesSection />
    <ContactSection />
  </div>
</template>
