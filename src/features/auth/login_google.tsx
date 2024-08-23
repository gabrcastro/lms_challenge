import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";

// Defina os tipos para a resposta do Google
interface GoogleUserInfo {
  sub: string;
  name: string;
  picture: string;
  email: string;
  // Adicione outros campos conforme necessário
}

// Defina os tipos para a resposta da API do YouTube
interface YouTubeChannel {
  kind: string;
  etag: string;
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    snippet: {
      title: string;
      description: string;
      // Adicione outros campos conforme necessário
    };
    contentDetails: {
      relatedPlaylists: {
        likes: string;
        favorites: string;
        // Adicione outros campos conforme necessário
      };
    };
    statistics: {
      viewCount: string;
      subscriberCount: string;
      videoCount: string;
    };
  }>;
}

const clientId =
  "1023627729244-i0tade29e9nmlph0j3ngk5nv81c97d5n.apps.googleusercontent.com";

function LoginWithGoogle() {
  const handleLoginSuccess = async (response: CredentialResponse) => {
    try {
      const { credential } = response;

      if (!credential) {
        throw new Error("No credential provided");
      }
      // Fetch para obter informações do usuário usando o ID Token
      const userResponse = await fetch(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credential}`
      );

      if (!userResponse.ok) {
        throw new Error("Failed to fetch user info");
      }

      const userInfo: GoogleUserInfo = await userResponse.json();
      console.log("User Info:", userInfo);

      // Fetch para obter informações do YouTube usando o token de autorização
      const youtubeResponse = await fetch(
        "https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&mine=true",
        {
          headers: {
            Authorization: `Bearer ${credential}`,
          },
        }
      );

      if (!youtubeResponse.ok) {
        throw new Error("Failed to fetch YouTube data");
      }

      const youtubeData: YouTubeChannel = await youtubeResponse.json();
      console.log("YouTube Response:", youtubeData);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  const handleLoginError = (error: string) => {
    console.error("Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => handleLoginError}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
}

export default LoginWithGoogle;
