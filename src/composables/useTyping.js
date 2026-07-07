import { ref, onMounted, onBeforeUnmount } from "vue";

export function useTyping(words = [], options = {}) {
  const {
    typingSpeed = 90,
    deletingSpeed = 45,
    pauseTime = 1400,
  } = options;

  const displayText = ref("");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId;

  const tick = () => {
    const currentWord = words[wordIndex] || "";

    if (!isDeleting) {
      charIndex++;
      displayText.value = currentWord.slice(0, charIndex);

      if (charIndex === currentWord.length) {
        isDeleting = true;
        timeoutId = setTimeout(tick, pauseTime);
        return;
      }
    } else {
      charIndex--;
      displayText.value = currentWord.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    timeoutId = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
  };

  onMounted(() => {
    if (words.length) {
      timeoutId = setTimeout(tick, 500);
    }
  });

  onBeforeUnmount(() => {
    clearTimeout(timeoutId);
  });

  return { displayText };
}
