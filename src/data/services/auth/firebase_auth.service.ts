import { authFirebase } from "@/config/firebase.config";
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
export async function signIn(email: string, password: string) {
  try {
    const auth = authFirebase;
    const result = await signInWithEmailAndPassword(auth, email, password);
    const token = await result.user.getIdToken();
    if (token) localStorage.setItem("token", token);
  } catch (error) {
    console.error(error);
  }
}

export async function userSignOut() {
  await authFirebase.signOut();
  localStorage.removeItem("token");
}
