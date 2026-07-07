<script setup>
import { useTyping } from "../../composables/useTyping";

const props = defineProps({
  words: { type: Array, required: true },
});

const { displayText } = useTyping(props.words, { typingSpeed: 85, deletingSpeed: 40, pauseTime: 1300 });
</script>

<template>
  <span class="hero-typing-line">
    I'm a <span class="accent-text" style="font-weight:700">{{ displayText }}</span
    ><span class="cursor">&nbsp;</span>
  </span>
</template>
