import { z } from "zod";

export const DiscoverQuerySchema = z
  .object({
    certification: z.string().optional(),
    "certification.gte": z.string().optional(),
    "certification.lte": z.string().optional(),
    certification_country: z.string().optional(),
    include_adult: z.boolean().default(false).optional(),
    include_video: z.boolean().default(false).optional(),
    language: z.string().default("en-US").optional(),
    page: z.number().int().default(1).optional(),
    primary_release_year: z.number().int().optional(),
    "primary_release_date.gte": z.string().optional(), // Should be a date in ISO format
    "primary_release_date.lte": z.string().optional(), // Should be a date in ISO format
    region: z.string().optional(),
    "release_date.gte": z.string().optional(), // Should be a date in ISO format
    "release_date.lte": z.string().optional(), // Should be a date in ISO format
    sort_by: z
      .enum([
        "original_title.asc",
        "original_title.desc",
        "popularity.asc",
        "popularity.desc",
        "revenue.asc",
        "revenue.desc",
        "primary_release_date.asc",
        "title.asc",
        "title.desc",
        "primary_release_date.desc",
        "vote_average.asc",
        "vote_average.desc",
        "vote_count.asc",
        "vote_count.desc",
      ])
      .default("popularity.desc")
      .optional(),
    "vote_average.gte": z.number().optional(),
    "vote_average.lte": z.number().optional(),
    "vote_count.gte": z.number().optional(),
    "vote_count.lte": z.number().optional(),
    watch_region: z.string().optional(),
    with_cast: z.string().optional(),
    with_companies: z.string().optional(),
    with_crew: z.string().optional(),
    with_genres: z.string().optional(),
    with_keywords: z.string().optional(),
    with_origin_country: z.string().optional(),
    with_original_language: z.string().optional(),
    with_people: z.string().optional(),
    with_release_type: z.string().optional(), // Comma or pipe-separated, validated if needed
    "with_runtime.gte": z.number().int().optional(),
    "with_runtime.lte": z.number().int().optional(),
    with_watch_monetization_types: z.string().optional(), // Validated against specific values if needed
    with_watch_providers: z.string().optional(),
    without_companies: z.string().optional(),
    without_genres: z.string().optional(),
    without_keywords: z.string().optional(),
    without_watch_providers: z.string().optional(),
    year: z.number().int().optional().optional(),
  })
  .optional();
