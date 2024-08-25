import { authFirebase } from "@/config/firebase.config";
import { FirebaseError } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export function hasUser(): boolean {
  return authFirebase.currentUser != null;
}

export function googleSignIn(): Promise<void> {
  const auth = authFirebase;
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // const user = result.user;

      if (token) localStorage.setItem("token", token);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error("errorCode", errorCode);
      console.error("errorMessage", errorMessage);
      console.error("email", email);
      console.error("credential", credential);
      // ...
    });
}

const errorMessages: Record<string, string> = {
  "auth/invalid-email": "O endereço de email é inválido.",
  "auth/invalid-credential": "Verifique o email e senha.",
  "auth/user-disabled": "Esta conta foi desativada.",
  "auth/user-not-found": "Nenhuma conta encontrada com este email.",
  "auth/wrong-password": "A senha está incorreta.",
  "auth/too-many-requests":
    "Houve muitas tentativas para entrar na sua conta. Aguarde alguns minutos e tente novamente.",
};

export async function signIn(email: string, password: string) {
  try {
    const auth = authFirebase;
    const result = await signInWithEmailAndPassword(auth, email, password);
    const token = await result.user.getIdToken();
    if (token) localStorage.setItem("token", token);
  } catch (error) {
    console.error(error);
    if (error instanceof FirebaseError) {
      const errorMessage =
        errorMessages[error.code] || "An unexpected error occurred.";
      throw new Error(errorMessage);
    }
    throw new Error("An unexpected error occurred.");
  }
}

export async function userSignOut() {
  await authFirebase.signOut();
  localStorage.removeItem("token");
}
