import { create } from "zustand";

interface QuestionsState {
  isVehicleDamaged: boolean | null;
  damageDescription: string;
  isSafeToDrive: boolean | null;
  setIsVehicleDamaged: (value: boolean) => void;
  setDamageDescription: (value: string) => void;
  setIsSafeToDrive: (value: boolean) => void;
  reset: () => void;
}

const defaults = {
  isVehicleDamaged: null,
  damageDescription: "",
  isSafeToDrive: null,
};

export const useQuestionsStore = create<QuestionsState>((set) => ({
  ...defaults,

  setIsVehicleDamaged: (value) => set({ isVehicleDamaged: value }),
  setDamageDescription: (value) => set({ damageDescription: value }),
  setIsSafeToDrive: (value) => set({ isSafeToDrive: value }),

  reset: () => set(defaults),
}));
