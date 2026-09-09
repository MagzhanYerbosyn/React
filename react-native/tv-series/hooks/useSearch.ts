import { searchService } from '@/services/searchService';
import { useQuery } from '@tanstack/react-query';

export const useSearch = (showName: string) => {
  return useQuery({
    queryKey: ['shows', showName],
    queryFn: () => searchService.getSearchResultsByName(showName),
    enabled: showName.trim().length > 0,
  });
};

export const useSearchById = (showId: string) => {
  return useQuery({
    queryKey: ['show', showId],
    queryFn: () => searchService.getSearchResultsById(showId),
    enabled: showId.trim().length > 0,
  });
};
