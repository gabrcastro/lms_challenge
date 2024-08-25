import { useEffect, useState } from "react";
import { ClassItemComponent } from "./class_item.component";
import { PlaylistItem } from "@/data/@types/playlist.types";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";
import { useCourseStore } from "@/state/course.store";

interface ModuleDropDownProps {
  items: PlaylistItem[];
  moduleName: string;
}

export const ModuleDropdownComponent = ({
  moduleName,
  items,
}: ModuleDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedVideo, setSelectedVideo } = useCourseStore();

  useEffect(() => {
    if (selectedVideo != "") setIsOpen(true);
  }, [setIsOpen, selectedVideo]);

  const handleVideoChange = (position: number) => {
    setSelectedVideo(position.toString());
    localStorage.setItem("selectedVideo", position.toString());
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className={clsx(
          "w-full py-4 px-10 shadow-sm text-left font-medium text-lg flex items-center justify-between"
        )}
        onClick={toggleDropdown}
      >
        {moduleName}
        {isOpen ? (
          <ChevronUp className="size-5 text-neutral-800" />
        ) : (
          <ChevronDown className="size-5 text-neutral-800" />
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col pt-2 pb-32 border-l-[.5px] border-l-neutral-300 text-sm h-screen overflow-y-auto min-w-96 w-full md:w-96 mt-10 md:mt-0">
          {items
            .slice()
            .reverse()
            .map((item) => (
              <ClassItemComponent
                key={item.id}
                selected={+selectedVideo === item.snippet.position + 1}
                title={item.snippet.title}
                onClick={() => handleVideoChange(item.snippet.position + 1)}
              />
            ))}
        </div>
      )}
    </div>
  );
};
