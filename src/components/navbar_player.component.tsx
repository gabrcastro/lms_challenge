import { LogOutIcon, MenuIcon, Trophy } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuComponent } from "@/features/player/components/menu.component";
import { PlaylistItem } from "@/data/@types/playlist.types";

interface NavBarPlayerProps {
  playlist: PlaylistItem[] | undefined;
}
export function NavBarPlayerComponent({ playlist }: NavBarPlayerProps) {
  const navigate = useNavigate();
  return (
    <header className="sticky bg-blue-950 top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <div className="gap-6 text-lg font-medium flex flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base text-neutral-50"
        >
          <img src="logo.png" className="h-6 w-6" />
          <span className="">LMS</span>
        </NavLink>
        <Separator orientation="vertical" className="" />
      </div>
      <div className="flex items-center gap-10">
        <div className="flex gap-10">
          <div className="hidden md:flex flex-col justify-end text-neutral-50">
            <span className="flex gap-3 text-xs mb-2">
              <Trophy className="size-4 text-neutral-50" />
              Seu progresso
            </span>
            <Progress
              value={33}
              color="bg-neutral-50"
              className="h-1 bg-blue-100/20"
            />
          </div>
          <Button
            onClick={() => navigate("/")}
            className="bg-transparent hover:bg-blue-900 flex gap-2"
          >
            <LogOutIcon className="size-4 text-neutral-50" />
            <span className="text-neutral-50">Voltar</span>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <MenuIcon className="size-5 text-neutral-50" />
          </SheetTrigger>
          <SheetContent className="p-0 pt-10">
            <SheetHeader className="px-10 mb-10">
              <div className="flex flex-col w-full justify-between items-center mb-10">
                <div className="flex flex-col justify-end text-neutral-900">
                  <span className="flex gap-3 text-xs mb-2">
                    <Trophy className="size-4 text-neutral-900" />
                    Seu progresso
                  </span>
                  <Progress
                    value={33}
                    color="bg-blue-800"
                    className="h-1 bg-blue-900/20"
                  />
                </div>
              </div>
              <SheetTitle>Lista de aulas</SheetTitle>
            </SheetHeader>
            <MenuComponent data={playlist} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
