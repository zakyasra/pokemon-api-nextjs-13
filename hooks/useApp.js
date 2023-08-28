import { create } from "zustand";

const useApp = create((set) => ({
  generation: [],
  setGeneration: (store) => {
    set({ generation: store });
  },

  type: [],
  setType: (store) => {
    set({ type: store });
  },
}));

export default useApp;
