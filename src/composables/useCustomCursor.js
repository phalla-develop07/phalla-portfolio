import { onMounted, onBeforeUnmount } from "vue";

export function useCustomCursor() {
  let dot, ring;
  let mouseX = 0,
    mouseY = 0,
    ringX = 0,
    ringY = 0;
  let rafId;

  function isDesktop() {
    return window.matchMedia("(min-width: 992px) and (hover: hover) and (pointer: fine)").matches;
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (dot) {
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    }
  }

  function onMouseOver(e) {
    if (!ring) return;
    const interactive = e.target.closest("a, button, input, textarea, .glass-card, .filter-chip");
    ring.style.width = interactive ? "48px" : "34px";
    ring.style.height = interactive ? "48px" : "34px";
    ring.style.opacity = interactive ? "0.6" : "1";
  }

  function animate() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (ring) {
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
    }
    rafId = requestAnimationFrame(animate);
  }

  onMounted(() => {
    if (!isDesktop()) return;

    dot = document.createElement("div");
    dot.className = "custom-cursor";
    ring = document.createElement("div");
    ring.className = "custom-cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    animate();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseover", onMouseOver);
    if (rafId) cancelAnimationFrame(rafId);
    dot?.remove();
    ring?.remove();
  });
}
