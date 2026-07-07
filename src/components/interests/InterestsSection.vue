<script setup>
import InterestCard from "./InterestCard.vue";
import { interests } from "../../data/interests";
</script>

<template>
  <section id="interests" class="section" style="padding-top:0;padding-bottom:3.5rem;">
    <div class="container-xl">
      <p class="text-center section-eyebrow d-inline-block mb-3 reveal" style="display:block;margin:0 auto 1.2rem;width:fit-content;">
        Areas I'm most focused on
      </p>
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <InterestCard v-for="(item, i) in interests" :key="item.name" :interest="item" :delay="i * 0.05" />
      </div>
    </div>
  </section>
</template>
