import { PlaylistItemListResponse } from "../../@types/playlist.types";
import { PlaylistListResponse } from "../../@types/playlists.types";

const API_KEY = import.meta.env.VITE_YT_API_KEY;
const API_URL = import.meta.env.VITE_YT_API_URL;
const CHANNEL_ID = import.meta.env.VITE_YT_CHANNEL_ID;

export async function fetchPlaylists(): Promise<PlaylistListResponse> {
  try {
    const response = await fetch(
      `${API_URL}/playlists?part=snippet&key=${API_KEY}&maxResults=15&channelId=${CHANNEL_ID}`
    );
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    const data: PlaylistListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar playlists:", error);
    throw error;
  }
}

export async function fetchPlaylistById(
  playlistId: string
): Promise<PlaylistItemListResponse> {
  try {
    const response = await fetch(
      `${API_URL}/playlistItems?part=snippet&key=${API_KEY}&maxResults=15&playlistId=${playlistId}`
    );
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    const data: PlaylistItemListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar playlists:", error);
    throw error;
  }
}
