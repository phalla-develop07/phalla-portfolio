<script setup>
import SectionTitle from "../ui/SectionTitle.vue";
import ContactInfo from "./ContactInfo.vue";
import ContactForm from "./ContactForm.vue";
</script>

<template>
  <section id="contact" class="section section-alt">
    <div class="mesh-bg" aria-hidden="true"></div>
    <div class="container-xl">
      <SectionTitle
        eyebrow="Let's talk"
        title="Get In"
        accent="Touch"
        subtitle="Have an internship or junior role open? I'd love to hear from you."
      />
      <div class="row g-4">
        <div class="col-lg-5">
          <ContactInfo />
        </div>
        <div class="col-lg-7">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>
