import {
  DiscoverQuery,
  MovieApiService,
} from "@/api/api-service/movie/movie-api-service";
import {
  PopularPeopleSchema,
  SearchMoviesSchema,
  TrendingMoviesSchema,
} from "@/schemas/movie-schema";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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
      SearchMoviesSchema.array().parse(data.pages.map((page) => page.results)),
  });
};

export const useGetMovieDetails = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => MovieApiService.getMovieDetails({ id }),
  });
};

export const useGetMovieVideos = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ["movieVideos", id],
    queryFn: () => MovieApiService.getMovieVideos({ id }),
  });
};

export const useGetMoviesByDiscover = ({ query }: { query: DiscoverQuery }) => {
  return useInfiniteQuery({
    queryKey: ["disvoerMovies", query],
    queryFn: ({ pageParam }) => {
      const transformedQuery = { ...query, page: pageParam };
      return MovieApiService.getMoviesByDiscover({ query: transformedQuery });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page === lastPage.total_pages ? undefined : lastPage.page + 1,
    select: (data) =>
      SearchMoviesSchema.array().parse(data.pages.map((page) => page.results)),
  });
};

export const useGetConfiguration = () => {
  return useQuery({
    queryKey: ["configuration"],
    queryFn: MovieApiService.getConfiguration,
  });
};
