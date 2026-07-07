import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    activeProjectFilter: "All",
    mobileNavOpen: false,
    isLoading: true,
  }),
  actions: {
    setProjectFilter(filter) {
      this.activeProjectFilter = filter;
    },
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
    closeMobileNav() {
      this.mobileNavOpen = false;
    },
    finishLoading() {
      this.isLoading = false;
    },
  },
});
