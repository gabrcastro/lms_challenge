export interface PlaylistItemListResponse {
  kind: string;
  etag: string;
  items: PlaylistItem[];
  pageInfo: PageInfo;
}

export interface PlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet: PlaylistItemSnippet;
}

export interface PlaylistItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ResourceId {
  kind: string;
  videoId: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
