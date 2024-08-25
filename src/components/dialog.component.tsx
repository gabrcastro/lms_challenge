import { userSignOut } from "@/data/services/auth/firebase_auth.service";
import { useAuthStore } from "@/state/auth.store";
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

export function DialogComponent() {
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
    <Dialog>
      <DialogTrigger asChild>Sair</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deseja realmente sair?</DialogTitle>
          <DialogDescription>
            Se sair, será necessário entrar novamente na sua conta.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" variant={"destructive"} onClick={handleSignOut}>
            Sim, quero sair
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
