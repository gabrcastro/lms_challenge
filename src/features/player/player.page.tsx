import { useLocation } from "react-router-dom";
import { ClassItemComponent } from "./components/class_item.component";
import { fetchPlaylistById } from "@/data/services/video.services";
import { useQuery } from "@tanstack/react-query";
import { PlaylistItemListResponse } from "@/data/@types/playlist.types";

export default function PlayerPage() {
  const location = useLocation();
  const { courseId, video } = location.state || {};

  const { data, error, isLoading } = useQuery<PlaylistItemListResponse>({
    queryKey: ["playlistById", courseId],
    queryFn: () => fetchPlaylistById(courseId),
  });

  console.log(isLoading);
  console.log(error);
  console.log(data);

  console.log("VIDEO " + video); // TODO: MUDAR ID DO VIDEO USANDO ZUSTAND

  return (
    <main className="flex flex-col md:flex-row w-full h-full overflow-y-auto">
      <div className="w-full flex items-start mt-10 justify-center">
        {/* <img
          src={data?.items[0].snippet.thumbnails.maxres.url}
          alt=""
          className="rounded-lg w-[80%] items-center justify-center"
        /> */}
        <iframe
          title="videoplayer"
          src={`https://www.youtube.com/embed/videoseries?list=${courseId}&index=${video}&rel=0`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
          className="rounded-lg w-[80%] h-[80%] items-center justify-center"
        />
      </div>
      <nav className="flex flex-col pt-10 pb-32 border-l-[.5px] border-l-neutral-300 text-sm h-screen overflow-y-auto min-w-96 w-full md:w-96 mt-10 md:mt-0">
        <span className="text-lg font-medium text-neutral-900 pl-10 mb-7">
          {data?.items[0].id.substring(0, 20)}
        </span>

        {data?.items.map((item) => (
          <ClassItemComponent
            selected={video == item.snippet.position}
            title={item.snippet.title}
            course={courseId}
            link={item.snippet.position.toString()}
          />
        ))}
      </nav>
    </main>
  );
}
