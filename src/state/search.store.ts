import { create } from "zustand";

interface SearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  isLoading: false, // Estado para controlar o loading
  setIsLoading: (isLoading) => set({ isLoading }),
}));
