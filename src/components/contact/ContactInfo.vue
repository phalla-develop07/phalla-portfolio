<script setup>
import { profile } from "../../data/profile";

const items = [
  { icon: "fa-envelope", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "fa-phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { icon: "fa-location-dot", label: "Location", value: profile.location, href: "" },
  { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", value: "phalla-suong", href: profile.linkedin },
  { icon: "fa-brands fa-github", label: "GitHub", value: "phalla-develop07", href: profile.github },
  { icon: "fa-globe", label: "Portfolio", value: "phallaportfolio.vercel.app", href: profile.portfolio },
];
</script>

<template>
  <div>
    <a
      v-for="item in items"
      :key="item.label"
      :href="item.href || undefined"
      :target="item.href ? '_blank' : undefined"
      rel="noopener"
      class="contact-info-item glass-card reveal-left"
      :class="{ 'pe-none': !item.href }"
    >
      <div class="contact-info-icon">
        <i :class="item.icon.includes('fa-brands') ? item.icon : ['fa-solid', item.icon]"></i>
      </div>
      <div>
        <div style="font-size:.78rem;color:var(--text-light);font-weight:600;">{{ item.label }}</div>
        <div style="font-weight:700;">{{ item.value }}</div>
      </div>
    </a>
  </div>
</template>
