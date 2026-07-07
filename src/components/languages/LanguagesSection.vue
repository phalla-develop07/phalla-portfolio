<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import LanguageCard from "./LanguageCard.vue";
import { languages } from "../../data/languages";
</script>

<template>
  <section id="languages" class="section section-alt">
    <div class="container-xl">
      <SectionTitle eyebrow="Communication" title="Languages" />
      <div class="row g-4 justify-content-center">
        <div v-for="(lang, i) in languages" :key="lang.name" class="col-6 col-md-3">
          <LanguageCard :lang="lang" :delay="i * 0.1" />
        </div>
      </div>
    </div>
  </section>
</template>
