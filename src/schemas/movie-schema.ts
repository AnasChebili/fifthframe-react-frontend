import { z, ZodSchema } from "zod";

const responseSchemaCreator = (schema: ZodSchema) =>
  z.object({
    page: z.number().default(0),
    results: z.array(schema),
    total_pages: z.number().default(0),
    total_results: z.number().default(0),
  });

const MoviesResultSchema = z.object({
  adult: z.boolean().default(true),
  backdrop_path: z.string().optional(),
  id: z.number().default(0),
  title: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string().optional(),
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
  backdrop_path: z.string().optional(),
  genre_ids: z.array(z.number()),
  id: z.number().default(0),
  media_type: z.string(),
  original_language: z.string(),
  original_title: z.string().optional(),
  overview: z.string(),
  poster_path: z.string().optional(),
  release_date: z.string().optional(),
  title: z.string().optional(),
  video: z.boolean().default(true),
  vote_average: z.number().default(0),
  vote_count: z.number().default(0),
});

const PeopleResultSchema = z.object({
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

const SearchMoviesResultsSchema = MoviesResultSchema.omit({ media_type: true });

export const SearchMoviesResponseSchema = responseSchemaCreator(
  SearchMoviesResultsSchema
);

export const SearchMoviesSchema = z.array(SearchMoviesResultsSchema);
