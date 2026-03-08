import { useEffect, useState } from "react";
import { api } from "@/api/api";
import YouTubeEmbed from "./YouTubeEmbed";

export default function LatestDarshan() {

  const [videoId, setVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getYoutubeId = (url: string) => {
    try {
      const parsed = new URL(url);

      if (parsed.hostname === "youtu.be") {
        return parsed.pathname.slice(1);
      }

      if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v");
      }

      if (parsed.pathname.includes("/embed/")) {
        return parsed.pathname.split("/embed/")[1];
      }

      return null;

    } catch {
      return null;
    }
  };

  const fetchLatestVideo = async () => {
    try {
      const res = await api.get("/videos/latest");

      const url = res?.data?.video?.youtubeUrl;

      if (!url) {
        setVideoId(null);
        return;
      }

      const id = getYoutubeId(url);

      setVideoId(id);

    } catch (error) {
      console.error("Failed to load video", error);
      setVideoId(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchLatestVideo();

    const interval = setInterval(fetchLatestVideo, 30000);

    return () => clearInterval(interval);

  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading Live Darshan...
      </div>
    );
  }

  if (!videoId) {
    return (
      <div className="text-center py-10 text-gray-500">
        No video available
      </div>
    );
  }

  return (
    <YouTubeEmbed
      videoId={videoId}
      live={true}
    />
  );
}