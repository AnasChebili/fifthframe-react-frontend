import { Dispatch, SetStateAction } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  useGetConfiguration,
  useGetMovieDetails,
  useGetMovieVideos,
} from "@/hooks/use-movie";
import { MovieYoutube } from "./movie-youtube";
import { Spinner } from "./ui/spinner";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Play } from "lucide-react";

export const MovieSheet = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
}) => {
  const { data: movie } = useGetMovieDetails({ id });
  const { data: videos } = useGetMovieVideos({ id });
  const { data: configuration } = useGetConfiguration();
  console.log(movie?.id);

  const video = videos?.results.find(
    (result) => result.type === "Trailer" && result.site === "YouTube"
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side={"right"}
        className="text-white bg-black border-none max-md:w-full"
      >
        <ScrollArea className="h-svh">
          <section className="flex flex-col gap-10 pb-10 ">
            {movie ? (
              <>
                <SheetHeader>
                  <SheetTitle className="text-3xl text-white">
                    {movie.title}
                  </SheetTitle>
                  <SheetDescription className="text-gray-400">
                    Watch Trailer
                  </SheetDescription>
                </SheetHeader>
                <section className="flex flex-col w-full gap-8 ">
                  {video?.key ? (
                    <div className="self-center w-full">
                      <MovieYoutube id={video?.key} />
                    </div>
                  ) : (
                    configuration && (
                      <img
                        src={`${configuration.images.secure_base_url}/${configuration.images.backdrop_sizes[2]}/${movie?.backdrop_path}`}
                        alt={`Photo by ${movie.title}`}
                        className="w-full"
                      />
                    )
                  )}

                  <section className="flex flex-col gap-5">
                    <section className="flex gap-4">
                      <p>
                        Rating:{" "}
                        <span className="text-green-500">
                          {movie.vote_average.toPrecision(2)}/10
                        </span>
                      </p>
                      <p>
                        <span className="text-gray-400">
                          {movie.release_date!.slice(0, 4)}
                        </span>
                      </p>
                      <p>
                        <span className="text-gray-400">
                          {(movie.runtime / 60).toPrecision(1)}h
                          {movie.runtime % 60}
                        </span>
                      </p>
                      <p>
                        <span className="text-gray-400">R</span>
                      </p>
                      <p>
                        <span className="text-gray-400">HD</span>
                      </p>
                    </section>
                    <a
                      href={movie.homepage}
                      className="flex items-center gap-2 px-6 py-1 bg-gray-500 rounded-full w-fit"
                    >
                      <Play className="w-4 h-4" />
                      Play
                    </a>
                    <p className="self-start w-full text-sm text-gray-400 lg:w-1/2">
                      {movie.overview}
                    </p>
                  </section>
                </section>
              </>
            ) : (
              <Spinner size={"large"} className="text-white" />
            )}
          </section>

          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
