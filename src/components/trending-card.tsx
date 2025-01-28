import { ConfigurationResponseSchema } from "@/schemas/configuration-schema";
import { MoviesResultSchema } from "@/schemas/movie-schema";

export const TrendingCard = ({
  movie,
  configuration,
}: {
  movie: Zod.infer<typeof MoviesResultSchema>;
  configuration: Zod.infer<typeof ConfigurationResponseSchema>;
}) => {
  return (
    <section
      key={movie.id}
      className="cursor-pointer flex flex-col text-white w-[300px] gap-4"
    >
      <div className="overflow-hidden rounded-md flex justify-center items-center">
        <img
          src={`${configuration.images.secure_base_url}/${configuration.images.poster_sizes[4]}/${movie.poster_path}`}
          alt={`Photo by ${movie.title}`}
          className="w-full"
        />
      </div>
      <section className=" flex flex-col gap-2">
        <h1 className="text-lg text-ellipsis line-clamp-1 ">{movie.title}</h1>
        <p className="text-ellipsis line-clamp-2 text-xs text-[#858585] ">
          {movie.overview}
        </p>
      </section>
    </section>
  );
};
