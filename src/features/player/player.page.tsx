import { useLocation } from "react-router-dom";
import { ClassItemComponent } from "./components/class_item.component";
import { fetchPlaylistById } from "@/data/services/video.services";
import { useQuery } from "@tanstack/react-query";
import { PlaylistItemListResponse } from "@/data/@types/playlist.types";

export default function PlayerPage() {
  const location = useLocation();
  const { courseId } = location.state || {};

  const { data, error, isLoading } = useQuery<PlaylistItemListResponse>({
    queryKey: ["playlistById", courseId],
    queryFn: () => fetchPlaylistById(courseId),
  });

  console.log(isLoading);
  console.log(error);
  console.log(data);

  // const lessons = [
  //   {
  //     title: "01 - Introduction to JavaScript",
  //     url: `01`,
  //   },
  //   {
  //     title: "02 - Understanding Variables",
  //     url: `02`,
  //   },
  //   {
  //     title: "03 - Working with Functions",
  //     url: `03`,
  //   },
  //   { title: "04 - Exploring Arrays", url: `04` },
  //   {
  //     title: "05 - Object-Oriented Programming Basics",
  //     url: `05`,
  //   },
  //   { title: "06 - Introduction to React", url: `06` },
  //   {
  //     title: "07 - State and Props in React",
  //     url: `07`,
  //   },
  //   {
  //     title: "08 - Understanding JavaScript Closures",
  //     url: `08`,
  //   },
  //   {
  //     title: "09 - Advanced Array Methods",
  //     url: `09`,
  //   },
  //   { title: "10 - Working with APIs", url: `010` },
  //   {
  //     title: "11 - Asynchronous JavaScript",
  //     url: `011`,
  //   },
  //   {
  //     title: "12 - Introduction to Node.js",
  //     url: `012`,
  //   },
  //   { title: "13 - Building REST APIs", url: `013` },
  //   {
  //     title: "14 - Introduction to TypeScript",
  //     url: `014`,
  //   },
  //   {
  //     title: "15 - State Management in React",
  //     url: `015`,
  //   },
  // ];

  return (
    <main className="flex flex-col md:flex-row w-full h-full overflow-y-auto">
      <div className="w-full flex items-start mt-10 justify-center">
        <img
          src={data?.items[0].snippet.thumbnails.maxres.url}
          alt=""
          className="rounded-lg w-[80%] items-center justify-center"
        />
        {/* <iframe
          className="rounded-lg w-[80%] items-center justify-center"
          id="player"
          type="text/html"
          width="640"
          height="390"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          frameborder="0"
        ></iframe> */}
      </div>
      <nav className="flex flex-col pt-10 pb-32 border-l-[.5px] border-l-neutral-300 text-sm h-screen overflow-y-auto min-w-96 w-full md:w-96 mt-10 md:mt-0">
        <span className="text-lg font-medium text-neutral-900 pl-10 mb-7">
          {data?.items[0].id.substring(0, 20)}
        </span>

        {data?.items.map((item) => (
          <ClassItemComponent
            selected={false}
            title={item.snippet.title}
            course={courseId}
            link={item.snippet.position.toString()}
          />
        ))}
      </nav>
    </main>
  );
}
