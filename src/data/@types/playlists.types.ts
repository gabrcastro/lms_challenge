// Interface para a resposta da playlist
export interface PlaylistListResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: PlaylistItem[];
}

// Interface para as informações da página
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

// Interface para um item de playlist
export interface PlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet: PlaylistSnippet;
}

// Interface para o snippet da playlist
export interface PlaylistSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: PlaylistThumbnails;
  channelTitle: string;
  localized: Localized;
}

// Interface para as miniaturas da playlist
export interface PlaylistThumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}

// Interface para uma miniatura
export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

// Interface para a descrição localizada
export interface Localized {
  title: string;
  description: string;
}
