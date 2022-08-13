import { Class } from './Class';
import { Gadget } from './Gadget';
import { Rarity } from './Rarity';
import { StarPower } from './StarPower';
import { Video } from './Video';

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
