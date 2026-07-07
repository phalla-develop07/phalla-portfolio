<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import HobbyCard from "./HobbyCard.vue";
import { hobbies } from "../../data/hobbies";
</script>

<template>
  <section id="hobbies" class="section section-alt">
    <div class="container-xl">
      <SectionTitle eyebrow="Beyond the code" title="Hobbies &" accent="Interests" />
      <div class="row g-4">
        <div v-for="(hobby, i) in hobbies" :key="hobby.name" class="col-md-4">
          <HobbyCard :hobby="hobby" :delay="i * 0.08" />
        </div>
      </div>
    </div>
  </section>
</template>
