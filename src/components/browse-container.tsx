import { useGetConfiguration, useGetMoviesByDiscover } from "@/hooks/use-movie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";
import { DiscoverQuery } from "@/api/api-service/movie/movie-api-service";
import { ScrollArea } from "./ui/scroll-area";
import { TrendingCard } from "./trending-card";
import { PreferenceBar } from "./preference-bar";
import { useIntersectionObserver } from "@/hooks/infinite-scroll";
import { Spinner } from "./ui/spinner";

export const BrowseContainer = () => {
  const [query, setQuery] = useState<DiscoverQuery>();
  const {
    data: moviePages,
    error,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
  } = useGetMoviesByDiscover({ query });
  const { data: configuration } = useGetConfiguration();
  console.log(error);

  const loadMoreRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, hasNextPage && !isFetchingNextPage);

  return (
    <Card className="w-full h-full text-white bg-transparent border-gray-500">
      <CardHeader>
        <CardTitle>Browse</CardTitle>
        <CardDescription>
          You can browse the collection of movies we have, you can sort or
          filter according to your preference
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center gap-8">
        <PreferenceBar setQuery={setQuery} />
        <ScrollArea className="h-[550px]">
          {!isFetching && (!moviePages || moviePages[0].length === 0) ? (
            <h1>Sorry, No Movies exist with those specifications</h1>
          ) : (
            <>
              <div className="grid justify-around grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-9 md:grid-cols-2">
                {moviePages?.map((moviePage) =>
                  moviePage.map(
                    (movie) =>
                      configuration &&
                      movie.poster_path && (
                        <TrendingCard
                          key={movie.id}
                          movie={movie}
                          configuration={configuration}
                          className="w-auto"
                        />
                      )
                  )
                )}
              </div>
              <div
                ref={loadMoreRef}
                className="flex items-center justify-center"
              >
                {hasNextPage && !isFetchingNextPage && (
                  <Spinner size={"large"} className="text-white" />
                )}
              </div>
            </>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
