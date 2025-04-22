import { MovieContext } from "@/context/movie-context";
import { ConfigurationResponseSchema } from "@/schemas/configuration-schema";
import { SearchMoviesResultsSchema } from "@/schemas/movie-schema";
import { useContext } from "react";

export const SearchCard = ({
  movie,
  configuration,
}: {
  movie: Zod.infer<typeof SearchMoviesResultsSchema>;
  configuration: Zod.infer<typeof ConfigurationResponseSchema>;
}) => {
  const { setOpen, setId } = useContext(MovieContext)!;
  return (
    <section
      className="flex items-center gap-8 text-white cursor-pointer"
      onClick={() => {
        setOpen(true);
        setId(movie.id);
      }}
    >
      <div className="flex items-center justify-center overflow-hidden rounded-md">
        <img
          src={`${configuration.images.secure_base_url}/${configuration.images.poster_sizes[2]}/${movie.poster_path}`}
          alt={`Photo by ${movie.title}`}
          className="w-full"
        />
      </div>
      <section className="flex flex-col gap-2 ">
        <h1 className="text-xl text-ellipsis line-clamp-1 ">{movie.title}</h1>
        <p className="text-ellipsis line-clamp-2 text-xs text-[#858585] w-[250px]">
          {movie.overview}
        </p>
      </section>
    </section>
  );
};
