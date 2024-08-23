import create from "zustand";

type Store = {
  currentCourse: string;
  setCurrentCourse: (value: string) => void;
};

export const useCourseStore = create<Store>((set) => ({
  currentCourse: "",
  setCurrentCourse: (value: string) => set(() => ({ currentCourse: value })),
}));
