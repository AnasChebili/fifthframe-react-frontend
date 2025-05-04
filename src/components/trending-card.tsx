import { MovieContext } from "@/context/movie-context";
import { cn } from "@/lib/utils";
import { ConfigurationResponseSchema } from "@/schemas/configuration-schema";
import {
  MoviesResultSchema,
  SearchMoviesResultsSchema,
} from "@/schemas/movie-schema";
import { useContext } from "react";

export const TrendingCard = ({
  movie,
  configuration,
  className,
}: {
  movie:
    | Zod.infer<typeof MoviesResultSchema>
    | Zod.infer<typeof SearchMoviesResultsSchema>;
  configuration: Zod.infer<typeof ConfigurationResponseSchema>;
  className?: string;
}) => {
  const { setOpen, setId } = useContext(MovieContext)!;
  return (
    <section
      key={movie.id}
      className={cn(
        "cursor-pointer flex flex-col text-white w-[300px] gap-4",
        className
      )}
      onClick={() => {
        setOpen(true);
        setId(movie.id);
      }}
    >
      <div className="flex items-center justify-center overflow-hidden rounded-md">
        <img
          src={`${configuration.images.secure_base_url}/${configuration.images.poster_sizes[4]}/${movie.poster_path}`}
          alt={`Photo by ${movie.title}`}
          className="w-full"
        />
      </div>
      <section className="flex flex-col gap-2 ">
        <h1 className="text-lg text-ellipsis line-clamp-1 ">{movie.title}</h1>
        <p className="text-ellipsis line-clamp-2 text-xs text-[#858585] ">
          {movie.overview}
        </p>
      </section>
    </section>
  );
};
