import { apiClient } from '@/api/apiClient';
import { TSearchResult } from '@/types/search.types';
import { TShow } from '@/types/show.types';

export const searchService = {
  getSearchResultsByName: (showName: string) =>
    apiClient.get<TSearchResult[]>(`/search/shows?q=${showName}`),
  getSearchResultsById: (showId: string) => apiClient.get<TShow>(`/shows/${showId}`),
};
