import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaylists } from "@/data/services/api/video.services";
import { PlaylistListResponse } from "@/data/@types/playlists.types";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  const { data, isLoading } = useQuery<PlaylistListResponse>({
    queryKey: ["playlists"],
    queryFn: fetchPlaylists,
  });

  return (
    <main className="p-10">
      <h1 className="text-xl font-medium text-neutral-950 mb-8">
        Todos os resultados
      </h1>
      {isLoading ? (
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-flow-col-3 lg:grid-cols-4">
          <Skeleton className="w-full h-56" />
          <Skeleton className="w-full h-56" />
          <Skeleton className="w-full h-56" />
          <Skeleton className="w-full h-56" />
        </div>
      ) : (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.items.map((item) => (
            <NavLink
              to={"/course"}
              state={{
                course: item.id,
                title: item.snippet.title,
                desc: item.snippet.description,
                thumb: item.snippet.thumbnails.standard.url,
              }}
              key={item.id}
            >
              <Card className="p-0">
                <CardHeader className="p-0 overflow-hidden rounded-t-lg">
                  <img
                    src={item.snippet.thumbnails.standard.url}
                    alt=""
                    className=""
                  />
                </CardHeader>
                <CardContent className="mt-5">
                  <CardTitle className="mb-2">{item.snippet.title}</CardTitle>
                  <CardDescription>{item.snippet.description}</CardDescription>
                </CardContent>
              </Card>
            </NavLink>
          ))}
        </div>
      )}
    </main>
  );
}
