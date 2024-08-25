import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoType } from "@/data/@types/video.type";

export default function HistoryPage() {
  const videos: VideoType[] = [
    { image: "/video_none.jpg", url: "/01", title: "Test Video 01" },
    { image: "/video_none.jpg", url: "/02", title: "Test Video 02" },
  ];

  return (
    <main className="p-10">
      <h1 className="text-xl font-medium text-neutral-950 mb-8">
        Vistos recentemente
      </h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <Card className="p-0">
            <CardHeader className="p-0 overflow-hidden rounded-t-lg">
              <img src="/video_none.jpg" alt="" />
            </CardHeader>
            <CardContent className="mt-5">
              <CardTitle className="mb-2">{video.title}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
