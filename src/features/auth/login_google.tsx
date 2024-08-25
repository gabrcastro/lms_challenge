import { Button } from "@/components/ui/button";
import { googleSignIn } from "@/data/services/auth/firebase_auth.service";
import { useAuthStore } from "@/state/auth.store";

function LoginWithGoogle() {
  const { setToken } = useAuthStore();

  async function handleSignIn() {
    await googleSignIn();

    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      window.location.href = "/";
    }
  }

  return (
    <Button
      onClick={handleSignIn}
      variant={"outline"}
      className="w-full flex gap-4"
    >
      <img src="/google.svg" alt="" className="size-5" />
      <span>Entrar com conta do Google</span>
    </Button>
  );
}

export default LoginWithGoogle;
