import { z, ZodSchema } from "zod";

const responseSchemaCreator = (schema: ZodSchema) =>
  z.object({
    page: z.number().default(0),
    results: z.array(schema),
    total_pages: z.number().default(0),
    total_results: z.number().default(0),
  });

export const MoviesResultSchema = z.object({
  adult: z.boolean().default(true),
  backdrop_path: z.string().optional().nullable(),
  id: z.number().default(0),
  title: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string().optional().nullable(),
  media_type: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number().default(0),
  release_date: z.string(),
  video: z.boolean().default(true),
  vote_average: z.number().default(0),
  vote_count: z.number().default(0),
});

export const TrendingMoviesResponseSchema =
  responseSchemaCreator(MoviesResultSchema);

export const TrendingMoviesSchema = z.array(MoviesResultSchema);

const KnownForSchema = z.object({
  adult: z.boolean().default(true),
  backdrop_path: z.string().optional().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number().default(0),
  media_type: z.string(),
  original_language: z.string(),
  original_title: z.string().optional(),
  overview: z.string(),
  poster_path: z.string().optional().nullable(),
  release_date: z.string().optional(),
  title: z.string().optional(),
  video: z.boolean().default(true),
  vote_average: z.number().default(0),
  vote_count: z.number().default(0),
});

export const PeopleResultSchema = z.object({
  adult: z.boolean().default(true),
  gender: z.number().default(0),
  id: z.number().default(0),
  known_for: z.array(KnownForSchema),
  known_for_department: z.string(),
  name: z.string(),
  popularity: z.number().default(0),
  profile_path: z.string().optional(),
});

export const PopularPeopleResponseSchema =
  responseSchemaCreator(PeopleResultSchema);

export const PopularPeopleSchema = z.array(PeopleResultSchema);

export const SearchMoviesResultsSchema = MoviesResultSchema.omit({
  media_type: true,
});

export const SearchMoviesResponseSchema = responseSchemaCreator(
  SearchMoviesResultsSchema
);

export const SearchMoviesSchema = z.array(SearchMoviesResultsSchema);

const GenreSchema = z.object({
  id: z.number().default(0),
  name: z.string(),
});

const ProductionCompanySchema = z.object({
  id: z.number().default(0),
  logo_path: z.string().optional(),
  name: z.string(),
  origin_country: z.string(),
});

const ProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

const SpokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

export const MovieDetailsResponseSchema = z.object({
  adult: z.boolean().default(true),
  backdrop_path: z.string().optional().nullable(),
  belongs_to_collection: z.string().optional(),
  budget: z.number().default(0),
  genres: z.array(GenreSchema),
  homepage: z.string().optional(),
  id: z.number().default(0),
  imdb_id: z.string().optional(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number().default(0),
  poster_path: z.string().optional().nullable(),
  production_companies: z.array(ProductionCompanySchema),
  production_countries: z.array(ProductionCountrySchema),
  release_date: z.string(),
  revenue: z.number().default(0),
  runtime: z.number().default(0),
  spoken_languages: z.array(SpokenLanguageSchema),
  status: z.string().optional(),
  tagline: z.string().optional(),
  title: z.string(),
  video: z.boolean().default(true),
  vote_average: z.number().default(0),
  vote_count: z.number().default(0),
});

const MovieVideosResultSchema = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number().default(0),
  type: z.string(),
  official: z.boolean().default(true),
  published_at: z.string(),
  id: z.string(),
});

export const MovieVideosResponseSchema = z.object({
  id: z.number().default(0),
  results: z.array(MovieVideosResultSchema),
});
