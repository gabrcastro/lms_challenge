import { CircleUser, Menu, PlaySquareIcon, Search } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import clsx from "clsx";
import { useAuthStore } from "@/state/auth.store";
import { userSignOut } from "@/data/services/auth.service";

export function NavBarComponent() {
  const location = useLocation();
  const currentPath = location.pathname;

  const { setToken } = useAuthStore();

  async function handleSignOut() {
    await userSignOut();
    const token = localStorage.getItem("token");
    if (!token) {
      setToken(null);
      window.location.href = "/";
    }
  }

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <PlaySquareIcon className="h-6 w-6" />
          <span className="sr-only">MegaNews LMS</span>
        </NavLink>
        <NavLink
          to="/"
          className={clsx(
            currentPath == "/"
              ? "font-bold text-foreground"
              : "text-muted-foreground",
            "transition-colors hover:text-foreground"
          )}
        >
          Início
        </NavLink>
        <NavLink
          to="/history"
          className={clsx(
            currentPath == "/history"
              ? "font-bold text-foreground"
              : "text-muted-foreground",
            "transition-colors hover:text-foreground"
          )}
        >
          Histórico
        </NavLink>
      </nav>
      {/* <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <NavLink
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </NavLink>
              <NavLink
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </NavLink>
              <NavLink to="#" className="hover:text-foreground">
                Settings
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet> */}
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquise por curso..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Menu de usuário</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to="/settings">Configurações</NavLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="w-full p-2 hover:cursor-pointer"
                  >
                    <span className="text-start font-normal w-full">Sair</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Deseja realmente sair?</DialogTitle>
                    <DialogDescription>
                      Se sair, será necessário entrar novamente na sua conta.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      type="submit"
                      variant={"destructive"}
                      onClick={handleSignOut}
                    >
                      Sim, quero sair
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Sheet>
          <SheetTrigger>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full flex items-center justify-center md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <NavLink
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <PlaySquareIcon className="h-6 w-6" />
                  <span className="">MegaNews LMS</span>
                </NavLink>
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-6 items-center mt-10">
                  <NavLink
                    to="/"
                    className={clsx(
                      currentPath == "/"
                        ? "font-bold text-foreground"
                        : "text-muted-foreground",
                      "transition-colors hover:text-foreground"
                    )}
                  >
                    Início
                  </NavLink>
                  <NavLink
                    to="/history"
                    className={clsx(
                      currentPath == "/history"
                        ? "font-bold text-foreground"
                        : "text-muted-foreground",
                      "transition-colors hover:text-foreground"
                    )}
                  >
                    Histórico
                  </NavLink>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
