<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import { whyHireMe } from "../../data/whyHireMe";
</script>

<template>
  <section id="why-hire-me" class="section section-alt">
    <div class="container-xl">
      <SectionTitle
        eyebrow="Let's work together"
        title="Why"
        accent="Hire Me"
        subtitle="What I bring to a team from day one."
      />
      <div class="row g-4">
        <div v-for="(item, i) in whyHireMe" :key="item.title" class="col-md-6 col-lg-4">
          <div class="hire-card glass-card reveal" :style="{ transitionDelay: `${i * 0.06}s` }">
            <div class="hire-icon-badge">
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
