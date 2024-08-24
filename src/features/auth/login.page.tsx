import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";
import LoginWithGoogle from "./login_google";

export function LoginPage() {
  return (
    <div className="w-full h-full flex flex-col gap-5 px-10 items-center justify-center">
      <p className="mb-14 text-xl font-bold">Entre na sua conta</p>
      <div className="flex flex-col w-full gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" />
      </div>
      <div className="flex flex-col w-full gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" />
      </div>
      <span className="w-full flex items-center justify-end">
        <NavLink
          to={"/"}
          className="text-end align-top hover:opacity-50 text-xs"
        >
          Esqueci minha senha
        </NavLink>
      </span>
      <Button className="w-full mt-2 bg-blue-800 hover:bg-blue-700">
        Entrar
      </Button>

      <p className="">ou</p>
      {/* <Button variant={"outline"} className="w-full flex gap-4">
        <img src="/public/google.svg" alt="" className="size-5" />
        Entrar com conta do Google
      </Button> */}
      <LoginWithGoogle />
    </div>
  );
}
