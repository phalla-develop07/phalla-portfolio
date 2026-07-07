<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import ProfileCard from "./ProfileCard.vue";
import { profile } from "../../data/profile";
</script>

<template>
  <section id="about" class="section section-alt">
    <div class="container-xl">
      <SectionTitle eyebrow="Get to know me" title="About" accent="Me" />

      <div class="row align-items-center g-5">
        <div class="col-lg-5">
          <span class="about-badge-pill glass" style="color:var(--color-primary)">
            <i class="fa-solid fa-location-dot"></i> {{ profile.location }}
          </span>
          <ProfileCard :profile="profile" />
        </div>

        <div class="col-lg-7">
          <h3 class="mb-3 reveal" style="font-size:1.6rem;">
            Building full-stack products, one clean commit at a time.
          </h3>
          <p class="mb-4 reveal" style="transition-delay:.05s">
            {{ profile.bio }}
          </p>

          <div class="row g-3">
            <div
              v-for="(stat, i) in profile.stats"
              :key="stat.label"
              class="col-6 col-md-3"
            >
              <div class="stat-card glass-card reveal" :style="{ transitionDelay: `${i * 0.08}s` }">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
