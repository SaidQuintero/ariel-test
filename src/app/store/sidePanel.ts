import { create } from "zustand";

export const useStore = create((set) => ({
  isOpen: false,
  open: () => set((state: any) => ({ isOpen: true })),
  close: () => set((state: any) => ({ isOpen: false })),
}));
