import YouTube, { YouTubeProps } from "react-youtube";

export const MovieYoutube = ({ id }: { id: string }) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    heigh: "auto",
    playerVars: {
      autoplayer: 1,
    },
  };

  return (
    <YouTube
      videoId={id}
      opts={opts}
      onReady={onPlayerReady}
      ClassName="w-full"
    />
  );
};
