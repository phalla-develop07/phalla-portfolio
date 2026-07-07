import { onMounted, onBeforeUnmount } from "vue";

/**
 * Automatically reveals any element with the classes:
 * .reveal, .reveal-left, .reveal-right
 * by adding .is-visible once it enters the viewport.
 * Also activates skill progress bars (.skill-progress-fill) when in view.
 */
export function useScrollAnimation() {
  let observer;

  const initObserver = () => {
    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .skill-progress-fill"
    );

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("skill-progress-fill")) {
              entry.target.classList.add("in-view");
            } else {
              entry.target.classList.add("is-visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  };

  onMounted(() => {
    // Slight delay to ensure DOM (including v-for lists) has rendered
    setTimeout(initObserver, 150);
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
  });

  return { refreshObserver: initObserver };
}
