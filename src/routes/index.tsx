import { AIDialog } from "@/components/ai-dialog";
import { AIDialogButton } from "@/components/ai-dialog-button";
import { BrowseContainer } from "@/components/browse-container";
import { MovieSheet } from "@/components/movie-sheet";
import { PopularContainer } from "@/components/popular-container";
import { RecommendationsDrawer } from "@/components/recommendations-drawer";
import { SearchContainer } from "@/components/search-container";
import { TrendingContainer } from "@/components/trending-container";
import { MovieContext } from "@/context/movie-context";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [openSheet, setOpenSheet] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [id, setId] = useState(0);
  const [message, setMessage] = useState<string>();
  return (
    <section className="flex flex-col gap-10 p-5">
      <div className="fixed z-50 -translate-x-1/2 bottom-5 left-1/2">
        <AIDialogButton setOpen={setOpenDialog} />
      </div>

      <MovieContext.Provider
        value={{ setOpen: setOpenSheet, setId, setMessage }}
      >
        <TrendingContainer />
        <div className="flex gap-5 sm:h-[600px] flex-col sm:flex-row">
          <div className="basis-2/3">
            <SearchContainer />
          </div>
          <div className="sm:basis-1/3 h-[600px] sm:h-auto">
            <PopularContainer />
          </div>
        </div>
        <BrowseContainer />
        <RecommendationsDrawer
          open={openDrawer}
          message={message}
          setOpen={setOpenDrawer}
        />
        <AIDialog
          open={openDialog}
          setOpen={setOpenDialog}
          setOpenDrawer={setOpenDrawer}
        />
      </MovieContext.Provider>

      <MovieSheet open={openSheet} setOpen={setOpenSheet} id={id} />
    </section>
  );
}
