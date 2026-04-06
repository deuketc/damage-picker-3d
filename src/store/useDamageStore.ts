import { create } from "zustand";

export type DamageSeverity = "light" | "moderate" | "severe";

export type CarPanel =
  | "hood"
  | "roof"
  | "trunk"
  | "front-bumper"
  | "rear-bumper"
  | "front-left-door"
  | "front-right-door"
  | "rear-left-door"
  | "rear-right-door"
  | "front-left-fender"
  | "front-right-fender"
  | "rear-left-quarter"
  | "rear-right-quarter"
  | "windshield"
  | "rear-windshield"
  | "front-left-window"
  | "front-right-window"
  | "rear-left-window"
  | "rear-right-window"
  | "front-left-mirror"
  | "front-right-mirror";

export interface PanelDamage {
  panel: CarPanel;
  severity: DamageSeverity;
}

interface DamageState {
  damagedPanels: Map<CarPanel, DamageSeverity>;
  selectedSeverity: DamageSeverity;
  setSelectedSeverity: (severity: DamageSeverity) => void;
  addDamage: (panel: CarPanel) => void;
  removeDamage: (panel: CarPanel) => void;
  toggleDamage: (panel: CarPanel) => void;
  clearAll: () => void;
  getDamageList: () => PanelDamage[];
}

export const useDamageStore = create<DamageState>((set, get) => ({
  damagedPanels: new Map(),
  selectedSeverity: "moderate",

  setSelectedSeverity: (severity) => set({ selectedSeverity: severity }),

  addDamage: (panel) =>
    set((state) => {
      const next = new Map(state.damagedPanels);
      next.set(panel, state.selectedSeverity);
      return { damagedPanels: next };
    }),

  removeDamage: (panel) =>
    set((state) => {
      const next = new Map(state.damagedPanels);
      next.delete(panel);
      return { damagedPanels: next };
    }),

  toggleDamage: (panel) => {
    const { damagedPanels, addDamage, removeDamage } = get();
    damagedPanels.has(panel) ? removeDamage(panel) : addDamage(panel);
  },

  clearAll: () => set({ damagedPanels: new Map() }),

  getDamageList: () => {
    const { damagedPanels } = get();
    return Array.from(damagedPanels.entries()).map(([panel, severity]) => ({
      panel,
      severity,
    }));
  },
}));
