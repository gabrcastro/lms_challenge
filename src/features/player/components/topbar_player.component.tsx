import { Button } from "@/components/ui/button";
import { useCourseStore } from "@/state/course.store";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TopBarPlayerProps {
  title: string;
}
export function TopBarPlayerComponent({ title }: TopBarPlayerProps) {
  const { selectedVideo, setSelectedVideo } = useCourseStore();

  const currentVideo = localStorage.getItem("selectedVideo") || "0";
  const playlistLength = localStorage.getItem("playlistLength") || 0;

  const handleNextVideo = () => {
    setSelectedVideo((+currentVideo - 1).toString());
    localStorage.setItem("selectedVideo", (+currentVideo - 1).toString());
  };

  const handlePreviousVideo = () => {
    setSelectedVideo((+currentVideo + 1).toString());
    localStorage.setItem("selectedVideo", (+currentVideo + 1).toString());
  };

  return (
    <div className="flex gap-2 w-full items-center justify-between my-5 px-5">
      <span className="w-full text-base font-medium text-blue-900 uppercase">
        {title}
      </span>
      <div className="flex gap-2 w-full items-center justify-end ">
        <Button
          disabled={selectedVideo == playlistLength}
          onClick={handlePreviousVideo}
          variant={"outline"}
          className=""
        >
          <ArrowLeft className="size-5 text-blue-900" />
        </Button>
        <Button
          disabled={selectedVideo == "1"}
          onClick={handleNextVideo}
          variant={"outline"}
          className=""
        >
          <ArrowRight className="size-5 text-blue-900" />
        </Button>
      </div>
    </div>
  );
}
