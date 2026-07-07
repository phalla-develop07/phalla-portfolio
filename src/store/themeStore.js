import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light",
  }),
  getters: {
    isDark: (state) => state.theme === "dark",
  },
  actions: {
    initTheme() {
      const saved = localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      this.theme = saved || (prefersDark ? "dark" : "light");
      this.applyTheme();
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("portfolio-theme", this.theme);
      this.applyTheme();
    },
    applyTheme() {
      document.documentElement.setAttribute("data-theme", this.theme);
    },
  },
});
