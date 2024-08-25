import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";
import LoginWithGoogle from "./login_google";
import { signIn } from "@/data/services/auth/firebase_auth.service";
import { useState } from "react";
import { useAuthStore } from "@/state/auth.store";

export function LoginPage() {
  const { setToken } = useAuthStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSignIn() {
    await signIn(email, password);
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      window.location.href = "/";
    }
  }
  return (
    <div className="w-full h-full flex flex-col gap-5 px-10 items-center justify-center">
      <p className="mb-14 text-xl font-bold">Entre na sua conta</p>
      <div className="flex flex-col w-full gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <span className="w-full flex items-center justify-end">
        <NavLink
          to={"/"}
          className="text-end align-top hover:opacity-50 text-xs"
        >
          Esqueci minha senha
        </NavLink>
      </span>
      <Button
        onClick={handleSignIn}
        className="w-full mt-2 bg-blue-800 hover:bg-blue-700"
      >
        Entrar
      </Button>

      <p className="">ou</p>
      {/* <Button variant={"outline"} className="w-full flex gap-4">
        <img src="/google.svg" alt="" className="size-5" />
        Entrar com conta do Google
      </Button> */}
      <LoginWithGoogle />
    </div>
  );
}
