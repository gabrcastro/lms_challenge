import { create } from "zustand";

type Store = {
  currentCourse: string;
  setCurrentCourse: (value: string) => void;

  selectedVideo: string;
  setSelectedVideo: (value: string) => void;
};

export const useCourseStore = create<Store>((set) => ({
  currentCourse: "",
  setCurrentCourse: (value: string) => set(() => ({ currentCourse: value })),

  selectedVideo: localStorage.getItem("selectedVideo") || "0",
  setSelectedVideo: (value: string) => set(() => ({ selectedVideo: value })),
}));
