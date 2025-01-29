import { api } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";
import { ConfigurationResponseSchema } from "@/schemas/configuration-schema";
import {
  MovieDetailsResponseSchema,
  MovieVideosResponseSchema,
  PopularPeopleResponseSchema,
  SearchMoviesResponseSchema,
  TrendingMoviesResponseSchema,
} from "@/schemas/movie-schema";
import { DiscoverQuerySchema } from "@/schemas/query-schema";

type TrendingMoviesResponse = Zod.infer<typeof TrendingMoviesResponseSchema>;

type PopularPeopleResponse = Zod.infer<typeof PopularPeopleResponseSchema>;

type SearchMoviesResponse = Zod.infer<typeof SearchMoviesResponseSchema>;

type MovieDetailsResponse = Zod.infer<typeof MovieDetailsResponseSchema>;

type MovieVideosResponse = Zod.infer<typeof MovieVideosResponseSchema>;

export type DiscoverQuery = Zod.infer<typeof DiscoverQuerySchema>;

type ConfigurationResponse = Zod.infer<typeof ConfigurationResponseSchema>;
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

  static async getMoviesByDiscover({
    query,
  }: {
    query: DiscoverQuery;
  }): Promise<SearchMoviesResponse> {
    const { data } = await api.get(ENDPOINTS.DISCOVER, { params: query });
    return data;
  }

  static async getConfiguration(): Promise<ConfigurationResponse> {
    const { data } = await api.get(ENDPOINTS.CONFIGURATION);
    return data;
  }
}
