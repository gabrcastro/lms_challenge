import { create } from "zustand";

type Store = {
  token: string | null;
  setToken: (value: string | null) => void;
};

export const useAuthStore = create<Store>((set) => ({
  token: null,
  setToken: (value: string | null) => set(() => ({ token: value })),
}));
