import { create } from "zustand";

type Store = {
  dialogVisible: boolean;
  setDialogVisibility: (value: boolean) => void;
};

export const useDialogStore = create<Store>((set) => ({
  dialogVisible: false,
  setDialogVisibility: (value: boolean) =>
    set(() => ({ dialogVisible: value })),
}));
