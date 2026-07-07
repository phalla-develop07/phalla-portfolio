<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import ToolCard from "./ToolCard.vue";
import { tools } from "../../data/tools";
</script>

<template>
  <section id="tools" class="section">
    <div class="container-xl">
      <SectionTitle
        eyebrow="Daily toolkit"
        title="Tools I"
        accent="Use"
        subtitle="The apps and platforms that keep my projects organized, tested, and shipped."
      />
      <div class="row g-3">
        <div v-for="(tool, i) in tools" :key="tool.name" class="col-6 col-md-3 col-lg-2">
          <ToolCard :tool="tool" :delay="i * 0.05" />
        </div>
      </div>
    </div>
  </section>
</template>
