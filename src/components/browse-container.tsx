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
    <Card className="w-full h-full border-gray-500 bg-transparent text-white">
      <CardHeader>
        <CardTitle>Browse</CardTitle>
        <CardDescription>
          You can browse the collection of movies we have, you can sort or
          filter according to your preference
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center flex-col gap-8 items-center">
        <PreferenceBar setQuery={setQuery} />
        <ScrollArea className="h-[550px]">
          {!isFetching && (!moviePages || moviePages[0].length === 0) ? (
            <h1>Sorry, No Movies exist with those specifications</h1>
          ) : (
            <>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-9 justify-around grid-cols-1 md:grid-cols-2">
                {moviePages?.map((moviePage) =>
                  moviePage.map(
                    (movie) =>
                      configuration &&
                      movie.poster_path && (
                        <TrendingCard
                          key={movie.id}
                          movie={movie}
                          configuration={configuration}
                        />
                      )
                  )
                )}
              </div>
              <div
                ref={loadMoreRef}
                className="flex justify-center items-center"
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
