import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IAppStore {
  searchInput: string;
  explore: boolean;
  isSearchFocus: boolean;
  isSearchListHover: boolean;
  favoriteShows: string[];
  setSearchInput: (searchInput: string) => void;
  toggleExplore: () => void;
  setIsSearchFocus: (isSearchFocus: boolean) => void;
  setIsSearchListHover: (isSearchListHover: boolean) => void;
  addToFavoriteShows: (showId: string) => void;
  deleteFromFavoriteShows: (showId: string) => void;
}

export const useAppStore = create<IAppStore>()(
  persist(
    (set, get) => ({
      searchInput: '',
      explore: false,
      isSearchFocus: false,
      isSearchListHover: false,
      favoriteShows: [],
      toggleExplore: () => set((state) => ({ explore: !state.explore })),
      setSearchInput: (searchInput) => set({ searchInput }),
      setIsSearchFocus: (isSearchFocus) => set({ isSearchFocus }),
      setIsSearchListHover: (isSearchListHover) => set({ isSearchListHover }),
      addToFavoriteShows: (showId) => {
        if (get().favoriteShows.includes(showId)) {
          return;
        }

        return set((state) => ({ favoriteShows: [...state.favoriteShows, showId] }));
      },
      deleteFromFavoriteShows: (showId) => {
        if (get().favoriteShows.includes(showId)) {
          const filteredShows = get().favoriteShows.filter((id) => id !== showId);

          return set(() => ({ favoriteShows: [...filteredShows] }));
        }
      },
    }),
    {
      name: 'favorite-shows',
      partialize: (state) => ({ favoriteShows: state.favoriteShows }),
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
