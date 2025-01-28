import { useGetTrendingMovies } from "@/hooks/use-movie";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export const TrendingContainer = () => {
  const MoviesPagesQuery = useGetTrendingMovies();
  return (
    <ScrollArea className=" whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {MoviesPagesQuery.data?.map((page) =>
          page.map((movie) => (
            <figure key={movie.id} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={movie.title}
                  alt={`Photo by ${movie.title}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{" "}
                <span className="font-semibold text-foreground">
                  {movie.overview}
                </span>
              </figcaption>
            </figure>
          ))
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
