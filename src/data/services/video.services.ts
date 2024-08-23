import { PlaylistItemListResponse } from "../@types/playlist.types";
import { PlaylistListResponse } from "../@types/playlists.types";

const API_KEY = "AIzaSyCx4xqAP9yTHD8jVzuVRmk3yl4vPFrDs_4";
const API_URL = "https://www.googleapis.com/youtube/v3";
const CHANNEL_ID = "UC2HgTOxuW_awwvEXSgNd_Yw";

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
