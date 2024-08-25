import { PlaylistItem } from "@/data/@types/playlist.types";
import { ModuleDropdownComponent } from "./module_item.component";

interface MenuProps {
  data: PlaylistItem[] | undefined;
}
export function MenuComponent({ data }: MenuProps) {
  return (
    <div className="flex flex-col h-screen overflow-y-auto overflow-x-hidden">
      <ModuleDropdownComponent items={data || []} moduleName="Módulo 1" />
      {/* {data?.items
              .slice() // Creates a copy of the original array
              .reverse()
              .map((item) => (
                <ClassItemComponent
                  key={item.id}
                  selected={+selectedVideo == item.snippet.position + 1}
                  title={item.snippet.title}
                  onClick={() => handleVideoChange(item.snippet.position + 1)}
                />
              ))} */}
    </div>
  );
}
