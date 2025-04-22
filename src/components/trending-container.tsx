import { useGetConfiguration, useGetTrendingMovies } from "@/hooks/use-movie";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { TrendingCard } from "./trending-card";
import { Spinner } from "./ui/spinner";
import { useIntersectionObserver } from "@/hooks/infinite-scroll";

export const TrendingContainer = () => {
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
    <ScrollArea className="border-none ">
      <section className="flex flex-col gap-8 p-4 mb-1 text-white">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl">Trending Movies</h1>
          <p className="text-sm text-gray-400">Find Trending Movies</p>
        </header>
        <div className="flex gap-4 ">
          {!error &&
            moviesPages?.map((page) =>
              page.map(
                (movie) =>
                  configurationQuery.data && (
                    <TrendingCard
                      key={movie.id}
                      movie={movie}
                      configuration={configurationQuery.data}
                      className="w-[200px] sm:w-[300px]"
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
      </section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
