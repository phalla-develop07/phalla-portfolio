<script setup>
import { ref } from "vue";
import TypingEffect from "./TypingEffect.vue";
import { profile } from "../../data/profile";
import { smoothScrollTo } from "../../utils/animations";

const showResumeModal = ref(false);
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="mesh-bg" aria-hidden="true"></div>
    <div class="blob blob-primary"
      style="width:420px;height:420px;top:-120px;left:-140px;animation:floatSlow 9s ease-in-out infinite;"
      aria-hidden="true"></div>
    <div class="blob blob-accent"
      style="width:340px;height:340px;bottom:-100px;right:-100px;animation:floatSlow 11s ease-in-out infinite reverse;"
      aria-hidden="true"></div>

    <div class="container-xl">
      <div class="row align-items-center g-5">
        <div class="col-lg-6 order-2 order-lg-1">
          <p class="hero-greeting reveal-left is-visible">
            <i class="fa-solid fa-hand-sparkles"></i> {{ profile.greeting }}
          </p>
          <h1 class="hero-name reveal-left is-visible">
            {{ profile.firstName }} <span class="accent-text">{{ profile.lastName }}</span>
          </h1>
          <TypingEffect :words="profile.typingRoles" />
          <p class="hero-desc reveal-left is-visible" style="transition-delay:.1s">
            {{ profile.tagline }}
          </p>

          <div class="hero-cta-group reveal-left is-visible" style="transition-delay:.2s">
            <button type="button" class="btn-gradient" @click="showResumeModal = true">
              <i class="fa-solid fa-file-pdf"></i> View CV
            </button>
            <a href="#" @click.prevent="smoothScrollTo('contact')" class="btn-outline-glass">
              <i class="fa-solid fa-paper-plane"></i> Contact Me
            </a>
            <a href="#" @click.prevent="smoothScrollTo('projects')" class="btn-outline-glass">
              <i class="fa-solid fa-diagram-project"></i> View Projects
            </a>
          </div>

          <div class="hero-socials reveal-left is-visible" style="transition-delay:.3s">
            <a :href="profile.github" target="_blank" rel="noopener" class="hero-social-link" aria-label="GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
            <a :href="profile.linkedin" target="_blank" rel="noopener" class="hero-social-link" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a :href="`mailto:${profile.email}`" class="hero-social-link" aria-label="Email">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <div class="hero-photo-wrap reveal-right is-visible">
            <div class="hero-photo-ring">
              <div class="hero-photo-inner">
                <img :src="profile.photo" :alt="profile.fullName" />
              </div>
            </div>

            <div class="badge-orbit-item item-1">
              <div class="hero-floating-badge glass-card">
                <i class="fa-brands fa-vuejs" style="color:#42b883"></i> Vue.js
              </div>
            </div>
            <div class="badge-orbit-item item-2">
              <div class="hero-floating-badge glass-card">
                <i class="fa-brands fa-laravel" style="color:#ff2d20"></i> Laravel
              </div>
            </div>
            <div class="badge-orbit-item item-3">
              <div class="hero-floating-badge glass-card">
                <i class="fa-solid fa-database" style="color:var(--color-primary)"></i> MySQL
              </div>
            </div>
            <div class="badge-orbit-item item-4">
              <div class="hero-floating-badge glass-card">
                <i class="fa-brands fa-node-js" style="color:#68a063"></i> Node.js
              </div>
            </div>
            <div class="badge-orbit-item item-5">
              <div class="hero-floating-badge glass-card">
                <i class="fa-brands fa-php" style="color:#777bb4"></i> PHP
              </div>
            </div>
            <div class="badge-orbit-item item-6">
              <div class="hero-floating-badge glass-card">
                <i class="fa-brands fa-square-js" style="color:#f0db4f"></i> JavaScript
              </div>
            </div>
            <div class="badge-orbit-item item-7">
              <div class="hero-floating-badge glass-card">
                <i class="fa-brands fa-html5" style="color:#e34f26"></i> HTML5
              </div>
            </div>
            <div class="badge-orbit-item item-8">
              <div class="hero-floating-badge glass-card">
                <i class="fa-brands fa-css3-alt" style="color:#264de4"></i> CSS3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#" class="hero-scroll-cue" @click.prevent="smoothScrollTo('about')" aria-label="Scroll to About section">
      <span class="mouse" aria-hidden="true"></span>
      SCROLL
    </a>
    <Teleport to="body">
      <div v-if="showResumeModal" class="resume-modal-overlay" @click.self="showResumeModal = false">
        <div class="resume-modal glass-strong">
          <div class="resume-modal-header">
            <span>{{ profile.fullName }} — CV</span>
            <div class="resume-modal-actions">
              <a :href="profile.resumeFile" download class="icon-round-btn" aria-label="Download PDF">
                <i class="fa-solid fa-download"></i>
              </a>
              <button type="button" class="icon-round-btn" @click="showResumeModal = false" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <iframe :src="profile.resumeFile" class="resume-modal-frame" title="CV Preview"></iframe>
        </div>
      </div>
    </Teleport>
  </section>
</template>
