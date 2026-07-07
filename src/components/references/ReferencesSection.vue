<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import ReferenceCard from "./ReferenceCard.vue";
import { references } from "../../data/references";
</script>

<template>
  <section id="references" class="section">
    <div class="container-xl">
      <SectionTitle eyebrow="Who can vouch for me" title="References" />
      <div class="row g-4 justify-content-center">
        <div v-for="(ref, i) in references" :key="ref.id" class="col-md-6 col-lg-4">
          <ReferenceCard :reference="ref" :delay="i * 0.08" />
        </div>
      </div>
    </div>
  </section>
</template>
