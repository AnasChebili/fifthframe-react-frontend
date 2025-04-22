import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { useGetConfiguration, useGetMoviesBySearch } from "@/hooks/use-movie";
import { SearchCard } from "./search-card";
import { ScrollArea } from "./ui/scroll-area";

export const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: moviePages, error } = useGetMoviesBySearch({
    query: searchQuery,
  });
  const { data: configuration } = useGetConfiguration();
  console.log(error);

  return (
    <Card className="w-full h-full text-white bg-transparent border-gray-500">
      <CardHeader>
        <CardTitle>Search</CardTitle>
        <CardDescription>You can search your favorite movies</CardDescription>
        <CardContent>
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-gray-500"
          />
        </CardContent>
        <CardFooter>
          <ScrollArea className="h-[400px] w-full">
            <div className="flex flex-col gap-8">
              {moviePages?.map((moviePage) =>
                moviePage.map(
                  (movie) =>
                    configuration && (
                      <SearchCard
                        key={movie.id}
                        movie={movie}
                        configuration={configuration}
                      />
                    )
                )
              )}
            </div>
          </ScrollArea>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};
