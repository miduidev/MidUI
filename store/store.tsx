import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Action = {
  setIsOpen: (isOpen: boolean | ((a: boolean) => boolean)) => void;
};

const useOpenStore = create<State & Action>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => {
    set((state) => ({
      isOpen: typeof isOpen === "function" ? isOpen(state.isOpen) : isOpen,
    }));
  },
}));

export default useOpenStore;
