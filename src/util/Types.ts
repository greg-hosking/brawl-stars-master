export interface Brawler {
  id: number;
  avatarId: number;
  name: string;
  hash: string;
  path: string;
  released: boolean;
  version: number;
  link: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  class: Class;
  rarity: Rarity;
  unlock: number | null;
  description: string;
  starPowers: StarPower[];
  gadgets: Gadget[];
  videos: Video[];
}

export interface Class {
  id: number;
  name: string;
}

export interface Rarity {
  id: number;
  name: string;
  color: string;
}
export interface StarPower {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  imageUrl: string;
  released: boolean;
}

export interface Gadget {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  imageUrl: string;
  released: boolean;
}
export interface Video {
  type: number;
  name: string;
  description: string;
  duration: string;
  videoUrl: string;
  previewUrl: string;
  uploadDate: string;
}

export interface Group {
  type: Class | Rarity;
  brawlers: Brawler[];
}
