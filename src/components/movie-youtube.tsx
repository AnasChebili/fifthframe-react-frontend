import YouTube, { YouTubeProps } from "react-youtube";

export const MovieYoutube = ({ id }: { id: string }) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "500",
    width: "900",
    playerVars: {
      autoplayer: 1,
    },
  };

  return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
};
