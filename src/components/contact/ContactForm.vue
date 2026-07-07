<script setup>
import { ref } from "vue";

const form = ref({ name: "", email: "", subject: "", message: "" });
const status = ref(""); // "", "sending", "sent", "error"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgojdvnn"; // <-- your real endpoint

async function handleSubmit() {
  status.value = "sending";
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(document.querySelector("#contact-form")),
    });

    if (response.ok) {
      status.value = "sent";
      form.value = { name: "", email: "", subject: "", message: "" };
    } else {
      status.value = "error";
    }
  } catch (err) {
    status.value = "error";
  } finally {
    setTimeout(() => (status.value = ""), 3500);
  }
}
</script>

<template>
  <form id="contact-form" class="glass-card reveal-right" style="padding:2rem;" @submit.prevent="handleSubmit">
    <div class="row g-0">
      <div class="col-md-6 pe-md-2">
        <label class="visually-hidden" for="contact-name">Your name</label>
        <input id="contact-name" v-model="form.name" name="name" type="text" class="form-control-glass" placeholder="Your name" required />
      </div>
      <div class="col-md-6 ps-md-2">
        <label class="visually-hidden" for="contact-email">Your email</label>
        <input id="contact-email" v-model="form.email" name="email" type="email" class="form-control-glass" placeholder="Your email" required />
      </div>
    </div>
    <label class="visually-hidden" for="contact-subject">Subject</label>
    <input id="contact-subject" v-model="form.subject" name="subject" type="text" class="form-control-glass" placeholder="Subject" />
    <label class="visually-hidden" for="contact-message">Message</label>
    <textarea id="contact-message" v-model="form.message" name="message" class="form-control-glass" rows="5" placeholder="Tell me about the role or opportunity..." required></textarea>

    <button type="submit" class="btn-gradient w-100 justify-content-center" :disabled="status === 'sending'">
      <i v-if="status === '' || status === 'error'" class="fa-solid fa-paper-plane"></i>
      <span v-if="status === 'sending'"><i class="fa-solid fa-spinner fa-spin"></i> Sending...</span>
      <span v-else-if="status === 'sent'"><i class="fa-solid fa-check"></i> Message Sent!</span>
      <span v-else-if="status === 'error'">Something went wrong — try again</span>
      <span v-else>Send Message</span>
    </button>
  </form>
</template>