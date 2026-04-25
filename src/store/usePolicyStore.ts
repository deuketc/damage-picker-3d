import { create } from "zustand";

interface PolicyDetails {
  insurer: string;
  make: string;
  model: string;
  registration: string;
  colour: string;
}

interface PolicyState extends PolicyDetails {
  setField: <K extends keyof PolicyDetails>(key: K, value: string) => void;
  reset: () => void;
}

const defaultDetails: PolicyDetails = {
  insurer: "State",
  make: "Tesla",
  model: "Model 3",
  registration: "ABC123",
  colour: "White",
};

export const usePolicyStore = create<PolicyState>((set) => ({
  ...defaultDetails,

  setField: (key, value) => set({ [key]: value }),

  reset: () => set(defaultDetails),
}));
