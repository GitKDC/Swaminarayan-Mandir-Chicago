type YouTubeEmbedProps = {
    videoId: string;
    title?: string;
    live?: boolean;
  };
  
  export default function YouTubeEmbed({
    videoId,
    title = "Live Darshan",
    live = false,
  }: YouTubeEmbedProps) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm">
  
        {/* LIVE BADGE */}
        {live && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            <span className="h-2 w-2 bg-white rounded-full animate-pulse" />
            LIVE NOW
          </div>
        )}
  
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }
  