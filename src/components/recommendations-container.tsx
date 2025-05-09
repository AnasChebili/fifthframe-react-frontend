import { useGetConfiguration, useGetTrendingMovies } from "@/hooks/use-movie";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useIntersectionObserver } from "@/hooks/infinite-scroll";
import { Spinner } from "./ui/spinner";
import { useContext } from "react";
import { MovieContext } from "@/context/movie-context";
import {
  MoviesResultSchema,
  SearchMoviesResultsSchema,
} from "@/schemas/movie-schema";
import { ConfigurationResponseSchema } from "@/schemas/configuration-schema";

export const RecommendationsContainer = () => {
  const {
    data: moviesPages,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetTrendingMovies();
  const configurationQuery = useGetConfiguration();

  const loadMoreRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, hasNextPage && !isFetchingNextPage);
  return (
    <ScrollArea className="border-none">
      <div className="flex gap-4 ">
        {!error &&
          moviesPages?.map((page) =>
            page.map(
              (movie) =>
                configurationQuery.data && (
                  <RecommendationsCard
                    key={movie.id}
                    movie={movie}
                    configuration={configurationQuery.data}
                  />
                )
            )
          )}
        <div ref={loadMoreRef} className="flex items-center justify-center">
          {hasNextPage && !isFetchingNextPage && (
            <Spinner size={"large"} className="text-white" />
          )}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

const RecommendationsCard = ({
  movie,
  configuration,
}: {
  movie:
    | Zod.infer<typeof MoviesResultSchema>
    | Zod.infer<typeof SearchMoviesResultsSchema>;
  configuration: Zod.infer<typeof ConfigurationResponseSchema>;
}) => {
  const { setOpen, setId } = useContext(MovieContext)!;
  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-md cursor-pointer w-[200px]"
      onClick={() => {
        setOpen(true);
        setId(movie.id);
      }}
    >
      <img
        src={`${configuration.images.secure_base_url}/${configuration.images.poster_sizes[4]}/${movie.poster_path}`}
        alt={`Photo by ${movie.title}`}
        className="w-full"
      />
    </div>
  );
};
