import { Dispatch, SetStateAction } from "react";
import { Drawer, DrawerContent } from "./ui/drawer";
import { Thinking } from "./thinking";
import { RecommendationsContainer } from "./recommendations-container";
import { useGetTrendingMovies } from "@/hooks/use-movie";
import { AlertCircle } from "lucide-react";
import { useGetAssistantResponse } from "@/hooks/use-assistant";

export const RecommendationsDrawer = ({
  open,
  setOpen,
  message,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  message: string | undefined;
}) => {
  const { data: query } = useGetAssistantResponse({ message });
  const { data: moviesPages, error } = useGetTrendingMovies();
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className=" min-h-[50%] dark">
        {error ? (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <AlertCircle className="w-6 h-6 mb-2 text-red-500" />
            <p className="text-red-500">
              Sorry, we couldn't load recommendations
            </p>
          </div>
        ) : !moviesPages ? (
          <Thinking />
        ) : (
          <section className="p-4">
            <h1 className="mb-5 text-2xl text-white">
              Based On Your Description
            </h1>
            <RecommendationsContainer />
          </section>
        )}
      </DrawerContent>
    </Drawer>
  );
};
