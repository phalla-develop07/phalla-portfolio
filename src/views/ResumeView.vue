<script setup>
import { profile } from "../data/profile";
import { education } from "../data/education";
import { skillCategories, softSkills } from "../data/skills";
import { tools } from "../data/tools";
import { languages } from "../data/languages";
import { experience } from "../data/experience";
import { hobbies } from "../data/hobbies";
import { references } from "../data/references";

function printResume() {
  window.print();
}
</script>

<template>
  <div class="resume-page">
    <div class="container-xl" style="padding-top:6.5rem;padding-bottom:3rem;">
      <div class="d-flex justify-content-end mb-4 no-print">
        <button class="btn-gradient" type="button" @click="printResume">
          <i class="fa-solid fa-print"></i> Print / Save as PDF
        </button>
      </div>

      <div class="resume-sheet glass-strong">
        <div class="row g-0">
          <!-- Sidebar -->
          <aside class="col-md-4 resume-sidebar">
            <img :src="profile.photo" :alt="profile.fullName" class="resume-photo" />
            <h2 class="resume-name">{{ profile.fullName }}</h2>
            <p class="resume-title">{{ profile.title }}</p>

            <h4 class="resume-side-heading">Contact</h4>
            <p class="resume-side-line"><i class="fa-solid fa-phone"></i> {{ profile.phone }}</p>
            <p class="resume-side-line"><i class="fa-solid fa-envelope"></i> {{ profile.email }}</p>
            <p class="resume-side-line"><i class="fa-solid fa-location-dot"></i> {{ profile.location }}</p>
            <p class="resume-side-line"><i class="fa-brands fa-linkedin"></i> {{ profile.linkedin.replace('https://www.','') }}</p>

            <h4 class="resume-side-heading">Education</h4>
            <p v-for="e in education" :key="e.degree" class="resume-side-line">
              {{ e.degree }}<br /><span style="opacity:.8">{{ e.school }}</span>
            </p>

            <h4 class="resume-side-heading">Skills</h4>
            <p v-for="cat in skillCategories" :key="cat.id" class="resume-side-line">
              <strong>{{ cat.title }}:</strong> {{ cat.skills.map(s => s.name).join(', ') }}
            </p>
            <p class="resume-side-line"><strong>Soft skills:</strong> {{ softSkills.map(s => s.name).join(', ') }}</p>

            <h4 class="resume-side-heading">Tools</h4>
            <p class="resume-side-line">{{ tools.map(t => t.name).join(', ') }}</p>

            <h4 class="resume-side-heading">Languages</h4>
            <p v-for="l in languages" :key="l.name" class="resume-side-line">{{ l.name }} — {{ l.level }}</p>
          </aside>

          <!-- Main -->
          <main class="col-md-8 resume-main">
            <h4 class="resume-main-heading">About Me</h4>
            <p>{{ profile.bio }}</p>

            <h4 class="resume-main-heading">Experience</h4>
            <div v-for="exp in experience" :key="exp.id" class="resume-exp-item">
              <div class="d-flex justify-content-between flex-wrap">
                <strong>{{ exp.title }}</strong>
                <span style="color:var(--text-light);font-size:.85rem;">{{ exp.period }}</span>
              </div>
              <div style="color:var(--color-primary);font-size:.88rem;font-weight:600;margin-bottom:.4rem;">{{ exp.role }}</div>
              <ul>
                <li v-for="(p, idx) in exp.points" :key="idx">{{ p }}</li>
              </ul>
            </div>

            <h4 class="resume-main-heading">Hobbies &amp; Interests</h4>
            <ul>
              <li v-for="h in hobbies" :key="h.name">{{ h.description }}</li>
            </ul>

            <h4 class="resume-main-heading">References</h4>
            <div class="row g-3">
              <div v-for="r in references" :key="r.id" class="col-sm-6">
                <strong>{{ r.name }}</strong><br />
                <span style="font-size:.85rem;color:var(--text-light);">{{ r.position }}</span><br />
                <span style="font-size:.85rem;">{{ r.phone }} · {{ r.email }}</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-sheet {
  border-radius: var(--radius-lg);
  overflow: hidden;
  max-width: 960px;
  margin: 0 auto;
}
.resume-sidebar {
  background: var(--gradient-primary);
  color: #fff;
  padding: 2.4rem 2rem;
}
.resume-photo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.5);
  margin-bottom: 1.2rem;
}
.resume-name { font-size: 1.4rem; color: #fff; margin-bottom: .2rem; }
.resume-title { color: rgba(255,255,255,0.85); font-weight: 600; font-size: .9rem; margin-bottom: 1.6rem; }
.resume-side-heading {
  color: #fff;
  font-size: .82rem;
  text-transform: uppercase;
  letter-spacing: .06em;
  border-bottom: 1px solid rgba(255,255,255,0.35);
  padding-bottom: .4rem;
  margin: 1.5rem 0 .7rem;
}
.resume-side-line { color: rgba(255,255,255,0.9); font-size: .85rem; margin-bottom: .5rem; }
.resume-main { padding: 2.4rem 2.2rem; background: var(--bg-elevated); }
.resume-main-heading {
  color: var(--color-primary);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: .05em;
  border-bottom: 2px solid rgba(var(--color-primary-rgb),.15);
  padding-bottom: .4rem;
  margin: 1.6rem 0 .8rem;
}
.resume-main-heading:first-child { margin-top: 0; }
.resume-exp-item { margin-bottom: 1.2rem; }
.resume-exp-item ul, .resume-main ul { padding-left: 1.1rem; font-size: .92rem; color: var(--text-light); }

@media print {
  .no-print { display: none !important; }
  .app-navbar, .app-footer, .back-to-top, .scroll-progress-bar { display: none !important; }
  .resume-page .container-xl { padding-top: 0 !important; }
  .resume-sheet { box-shadow: none !important; }
  body { background: #fff !important; }
}
</style>
