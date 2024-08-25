import { useLocation } from "react-router-dom";
// import { ClassItemComponent } from "./components/class_item.component";
import { fetchPlaylistById } from "@/data/services/api/video.services";
import { useQuery } from "@tanstack/react-query";
import { PlaylistItemListResponse } from "@/data/@types/playlist.types";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { NavBarPlayerComponent } from "@/components/navbar_player.component";
import CommentSection from "./components/comments.component";
import { useCourseStore } from "@/state/course.store";
import { MenuComponent } from "./components/menu.component";
import { TopBarPlayerComponent } from "./components/topbar_player.component";

export default function PlayerPage() {
  const location = useLocation();
  const { courseId, title } = location.state || {};

  const { data, isLoading } = useQuery<PlaylistItemListResponse>({
    queryKey: ["playlistById", courseId],
    queryFn: () => fetchPlaylistById(courseId),
  });

  const { selectedVideo } = useCourseStore();

  useEffect(() => {
    if (data?.items.length == null || data?.items.length == undefined) {
      return;
    } else {
      localStorage.setItem("playlistLength", data?.items.length.toString());
    }
  }, [data]);

  return (
    <div className="w-full h-full overflow-hidden">
      <NavBarPlayerComponent playlist={data?.items} />
      <main className="w-full h-full overflow-y-auto">
        <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto">
          <div className="w-full h-full flex items-startjustify-center overflow-y-auto">
            {isLoading ? (
              <Skeleton className="w-full h-[90%] items-center justify-center" />
            ) : (
              <div className="w-full h-screen overflow-y-auto">
                <TopBarPlayerComponent title={title} />
                <iframe
                  title="videoplayer"
                  src={`https://www.youtube.com/embed/watch?v=tLKFoubznek&list=${courseId}&index=${selectedVideo}`}
                  allow="accelerometer; encrypted-media; gyroscope;"
                  allowFullScreen
                  className="w-full h-max md:h-[70%] items-center justify-center"
                />

                <div className="px-2 py-5 md:py-10 md:px-10 flex flex-col items-start justify-start w-full h-full">
                  <p className="text-sm font-medium mb-10">Tire dúvidas</p>

                  <CommentSection />
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex flex-col pt-1 md:pt-10 pb-32 border-l-[.5px] border-l-neutral-300 text-sm h-screen overflow-y-auto min-w-96 w-full md:w-96 mt-10 md:mt-0">
            <span className="text-lg font-medium text-neutral-900 pl-10 mb-7">
              Lista de aulas
            </span>
            <MenuComponent data={data?.items} />
          </div>

          {/* <div className="hidden md:flex flex-col pt-1 md:pt-10 pb-32 border-l-[.5px] border-l-neutral-300 text-sm h-screen overflow-y-auto min-w-96 w-full md:w-96 mt-10 md:mt-0">
            <span className="text-lg font-medium text-neutral-900 pl-10 mb-7">
              Lista de aulas
            </span>

            <ModuleDropdownComponent
              items={data?.items || []}
              moduleName="Módulo 1"
            />
          </div> */}
        </div>
      </main>
    </div>
  );
}
