import { create } from "zustand";
import type { Product } from "../../products/types/Product";

interface ModalStore {
  isOpen: boolean;
  content: Product | null;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  openModal: (product: Product) => set({ isOpen: true, content: product }),
  closeModal: () => set({ isOpen: false }),
}));
