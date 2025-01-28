import { MovieApiService } from "@/api/api-service/movie/movie-api-service";
import {
  PopularPeopleSchema,
  SearchMoviesSchema,
  TrendingMoviesSchema,
} from "@/schemas/movie-schema";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetTrendingMovies = () => {
  return useInfiniteQuery({
    queryKey: ["trendingMovies"],
    queryFn: MovieApiService.getTrendingMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1,
    select: (data) =>
      TrendingMoviesSchema.array().parse(
        data.pages.map((page) => page.results)
      ),
  });
};

export const useGetPopularPeople = () => {
  return useInfiniteQuery({
    queryKey: ["popularPeople"],
    queryFn: MovieApiService.getPopularPeople,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1,
    select: (data) =>
      PopularPeopleSchema.array().parse(data.pages.map((page) => page.results)),
  });
};

export const useGetMoviesBySearch = ({ query }: { query: string }) => {
  return useInfiniteQuery({
    queryKey: ["searchMovies", query],
    queryFn: ({ pageParam }) =>
      MovieApiService.getMoviesBySearch({ pageParam, query }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1,
    select: (data) =>
      SearchMoviesSchema.parse(data.pages.map((page) => page.results)),
  });
};
