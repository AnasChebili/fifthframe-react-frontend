import { BrowseContainer } from "@/components/browse-container";
import { MovieSheet } from "@/components/movie-sheet";
import { PopularContainer } from "@/components/popular-container";
import { SearchContainer } from "@/components/search-container";
import { TrendingContainer } from "@/components/trending-container";
import { MovieContext } from "@/context/movie-context";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  return (
    <section className="p-5 flex flex-col gap-10">
      <MovieContext.Provider value={{ setOpen, setId }}>
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
      </MovieContext.Provider>

      <MovieSheet open={open} setOpen={setOpen} id={id} />
    </section>
  );
}
