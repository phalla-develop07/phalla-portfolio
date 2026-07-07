import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useThemeStore } from "../store/themeStore";

export function useTheme() {
  const store = useThemeStore();
  const { theme, isDark } = storeToRefs(store);

  onMounted(() => {
    store.initTheme();
  });

  return {
    theme,
    isDark,
    toggleTheme: store.toggleTheme,
  };
}
