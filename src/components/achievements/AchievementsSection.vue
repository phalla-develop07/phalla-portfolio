<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import { achievements } from "../../data/achievements";
</script>

<template>
  <section id="achievements" class="section">
    <div class="container-xl">
      <SectionTitle eyebrow="Milestones" title="Achievements" />
      <div class="row g-4">
        <div v-for="(item, i) in achievements" :key="item.title" class="col-md-6 col-lg-4">
          <div class="achievement-card glass-card reveal" :style="{ transitionDelay: `${i * 0.07}s` }">
            <div class="achievement-icon-badge">
              <i class="fa-solid" :class="item.icon"></i>
            </div>
            <h4 style="font-size:1.05rem;margin-bottom:.4rem;">{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
