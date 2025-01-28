import { api } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";
import {
  MovieDetailsResponseSchema,
  MovieVideosResponseSchema,
  PopularPeopleResponseSchema,
  SearchMoviesResponseSchema,
  TrendingMoviesResponseSchema,
} from "@/schemas/movie-schema";

export type TrendingMoviesResponse = Zod.infer<
  typeof TrendingMoviesResponseSchema
>;

export type PopularPeopleResponse = Zod.infer<
  typeof PopularPeopleResponseSchema
>;

export type SearchMoviesResponse = Zod.infer<typeof SearchMoviesResponseSchema>;

export type MovieDetailsResponse = Zod.infer<typeof MovieDetailsResponseSchema>;

export type MovieVideosResponse = Zod.infer<typeof MovieVideosResponseSchema>;
export class MovieApiService {
  static async getTrendingMovies({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<TrendingMoviesResponse> {
    const { data } = await api.get(ENDPOINTS.TRENDING, {
      params: { page: pageParam },
    });
    return data;
  }

  static async getPopularPeople({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<PopularPeopleResponse> {
    const { data } = await api.get(ENDPOINTS.POPULAR, {
      params: { page: pageParam },
    });
    return data;
  }

  static async getMoviesBySearch({
    pageParam,
    query,
  }: {
    pageParam: number;
    query: string;
  }): Promise<SearchMoviesResponse> {
    const { data } = await api.get(ENDPOINTS.SEARCH, {
      params: { page: pageParam, query },
    });
    return data;
  }

  static async getMovieDetails({
    id,
  }: {
    id: number;
  }): Promise<MovieDetailsResponse> {
    const { data } = await api.get(`${ENDPOINTS.MOVIE}/${id}`);
    return data;
  }

  static async getMovieVideos({
    id,
  }: {
    id: number;
  }): Promise<MovieVideosResponse> {
    const { data } = await api.get(`${ENDPOINTS.MOVIE}/${id}/videos`);
    return data;
  }
}
