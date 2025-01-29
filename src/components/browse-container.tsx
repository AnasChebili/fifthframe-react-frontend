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

export const BrowseContainer = () => {
  const [query, setQuery] = useState<DiscoverQuery>();
  const { data: moviePages, error } = useGetMoviesByDiscover({ query });
  const { data: configuration } = useGetConfiguration();
  console.log(error);

  return (
    <Card className="w-full h-full border-gray-500 bg-transparent text-white">
      <CardHeader>
        <CardTitle>Browse</CardTitle>
        <CardDescription>
          You can browse the collection of movies we have, you can sort or
          filter according to your preference
        </CardDescription>
        <CardContent className="flex justify-center flex-col gap-3 items-center">
          <PreferenceBar setQuery={setQuery} />
          <ScrollArea>
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
          </ScrollArea>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
