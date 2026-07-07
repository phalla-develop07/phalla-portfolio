<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import EducationCard from "./EducationCard.vue";
import { education } from "../../data/education";
</script>

<template>
  <section id="education" class="section">
    <div class="container-xl">
      <SectionTitle eyebrow="Academic background" title="Education" accent="Journey" />
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <EducationCard v-for="item in education" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>
