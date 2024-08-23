export type VideoType = {
  image: string;
  url: string;
  title: string;
};

export interface Playlist {
  collections?: Collection[];
}

export interface Collection {
  filter?: string;
  title?: string;
}
