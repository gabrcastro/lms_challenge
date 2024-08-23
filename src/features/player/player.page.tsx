import { useLocation } from "react-router-dom";
import { ClassItemComponent } from "./components/class_item.component";
import { fetchPlaylistById } from "@/data/services/video.services";
import { useQuery } from "@tanstack/react-query";
import { PlaylistItemListResponse } from "@/data/@types/playlist.types";
import { useEffect, useState } from "react";

export default function PlayerPage() {
  const location = useLocation();
  const { courseId } = location.state || {};

  const { data, error, isLoading } = useQuery<PlaylistItemListResponse>({
    queryKey: ["playlistById", courseId],
    queryFn: () => fetchPlaylistById(courseId),
  });

  const [selectedVideo, setSelectedVideo] = useState<string>(
    localStorage.getItem("selectedVideo") ?? "0"
  );

  useEffect(() => {
    if (data?.items.length == null || data?.items.length == undefined) return;

    const video = localStorage.getItem("selectedVideo");

    if (video != null) {
      setSelectedVideo(video);
    } else {
      setSelectedVideo(String(data?.items.length));
    }
  }, [data]);

  const handleVideoChange = (position: number) => {
    setSelectedVideo(position.toString());
    localStorage.setItem("selectedVideo", position.toString());
  };

  useEffect(() => {
    console.log(">>>> ", selectedVideo);
  }, [selectedVideo]);

  return (
    <main className="flex flex-col md:flex-row w-full h-full overflow-y-auto">
      <div className="w-full h-full flex items-startjustify-center overflow-y-auto">
        {/* <img
          src={data?.items[0].snippet.thumbnails.maxres.url}
          alt=""
          className="rounded-lg w-[80%] items-center justify-center"
        /> */}
        <iframe
          title="videoplayer"
          src={`https://www.youtube.com/embed/watch?v=tLKFoubznek&list=${courseId}&index=${selectedVideo}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
          className="rounded-lg p-10 w-full h-[90%] items-center justify-center"
        />
      </div>
      <div className="flex flex-col pt-10 pb-32 border-l-[.5px] border-l-neutral-300 text-sm h-screen overflow-y-auto min-w-96 w-full md:w-96 mt-10 md:mt-0">
        <span className="text-lg font-medium text-neutral-900 pl-10 mb-7">
          Lista de aulas
        </span>

        {data?.items.map((item) => (
          <ClassItemComponent
            key={item.id}
            selected={+selectedVideo == item.snippet.position + 1}
            title={item.snippet.title}
            onClick={() => handleVideoChange(item.snippet.position + 1)}
          />
        ))}
      </div>
    </main>
  );
}
