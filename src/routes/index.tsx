import { BrowseContainer } from "@/components/browse-container";
import { PopularContainer } from "@/components/popular-container";
import { SearchContainer } from "@/components/search-container";
import { TrendingContainer } from "@/components/trending-container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="p-5 flex flex-col gap-10">
      <TrendingContainer />
      <div className="flex gap-5 h-[600px]">
        <div className="basis-2/3">
          <SearchContainer />
        </div>
        <div className="basis-1/3">
          <PopularContainer />
        </div>
      </div>
      <BrowseContainer />
    </section>
  );
}
