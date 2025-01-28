import { useGetConfiguration, useGetPopularPeople } from "@/hooks/use-movie";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Spinner } from "./ui/spinner";
import { useIntersectionObserver } from "@/hooks/infinite-scroll";
import { PersonCard } from "./person-card";

export const PopularContainer = () => {
  const {
    data: PeoplePages,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetPopularPeople();
  const configurationQuery = useGetConfiguration();

  const loadMoreRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, hasNextPage && !isFetchingNextPage);
  return (
    <ScrollArea className=" rounded-lg border-gray-500 border h-full w-full">
      <section className="flex flex-col gap-8 p-5 text-white">
        <header className=" flex flex-col gap-2">
          <h1 className="text-2xl">Most Popular Celebrities</h1>
          <p className="text-sm text-gray-400">
            Check out these popular actors
          </p>
        </header>
        <div className="flex flex-col gap-8 ">
          {!error &&
            PeoplePages?.map((page) =>
              page.map(
                (person) =>
                  configurationQuery.data && (
                    <PersonCard
                      key={person.id}
                      person={person}
                      configuration={configurationQuery.data}
                    />
                  )
              )
            )}
          <div ref={loadMoreRef} className="flex justify-center items-center">
            {hasNextPage && !isFetchingNextPage && (
              <Spinner size={"large"} className="text-white" />
            )}
          </div>
        </div>
      </section>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
