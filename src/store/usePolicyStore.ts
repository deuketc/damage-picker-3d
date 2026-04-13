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
  insurer: "",
  make: "",
  model: "",
  registration: "ABC123",
  colour: "",
};

export const usePolicyStore = create<PolicyState>((set) => ({
  ...defaultDetails,

  setField: (key, value) => set({ [key]: value }),

  reset: () => set(defaultDetails),
}));
