import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  language: "tsx" | "html" | "vue";
  setLanguage: (language: State["language"]) => void;
};

export const useConfigStore = create<State>()(
  persist(
    (set) => ({
      language: "tsx",
      setLanguage(language) {
        set({ language });
      },
    }),
    { name: "storage", storage: createJSONStorage(() => localStorage) }
  )
);
