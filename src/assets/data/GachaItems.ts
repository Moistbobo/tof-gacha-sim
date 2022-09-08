import {
  absoluteZero,
  chakramOfSeas,
  combatBlade,
  compositeBow,
  emBlade,
  frostedSpear,
  icewindArrow,
  moltenShieldV2,
  negatingCube,
  nightingaleFeather,
  pummeler,
  rosyEdge,
  scytheOfCrow,
  staffOfScars,
  terminator,
  thunderblades,
  thunderousHalberd,
  weaponBatteryIII,
} from '../images';

export enum RARITY_ENUM {
  R,
  SR,
  SSR,
}

type GachaItem = {
  name: string;

  weaponImage?: string;

  simulacraName: string;

  rarity: RARITY_ENUM;
};

const GachaItems: GachaItem[] = [
  {
    name: 'Guren Blade',
    simulacraName: 'Claudia',
    weaponImage: '',
    rarity: 2,
  },
  {
    name: 'Absolute Zero',
    simulacraName: 'Cocoritter',
    weaponImage: absoluteZero,
    rarity: 2,
  },
  {
    name: 'Rosy Edge',
    simulacraName: 'Meryl',
    weaponImage: rosyEdge,
    rarity: 2,
  },
  {
    name: 'Negating Cube',
    simulacraName: 'Zero',
    weaponImage: negatingCube,
    rarity: 2,
  },
  {
    name: 'Icewind Arrow',
    simulacraName: 'Tsubasa',
    weaponImage: icewindArrow,
    rarity: 2,
  },
  {
    name: 'Scythe of the Crow',
    simulacraName: 'KING',
    weaponImage: scytheOfCrow,
    rarity: 2,
  },
  {
    name: 'Chakram of the Seas',
    simulacraName: 'Shiro',
    weaponImage: chakramOfSeas,
    rarity: 2,
  },
  {
    name: 'Molten Shield V2',
    simulacraName: 'Huma',
    weaponImage: moltenShieldV2,
    rarity: 2,
  },
  {
    name: 'Thunderblades',
    simulacraName: 'Crow',
    weaponImage: thunderblades,
    rarity: 2,
  },
  {
    name: "Nightingale's Feather",
    simulacraName: 'Bai Ling',
    weaponImage: nightingaleFeather,
    rarity: 1,
  },
  {
    name: 'The Terminator',
    simulacraName: 'Hilda',
    weaponImage: terminator,
    rarity: 1,
  },
  {
    name: 'Staff of Scars',
    simulacraName: 'Pepper',
    weaponImage: staffOfScars,
    rarity: 1,
  },
  {
    name: 'Pummeler',
    simulacraName: 'Ene',
    weaponImage: pummeler,
    rarity: 1,
  },
  {
    name: 'Thunderous Halberd',
    simulacraName: 'Echo',
    weaponImage: thunderousHalberd,
    rarity: 1,
  },
  {
    name: 'Combat Blade',
    simulacraName: '',
    weaponImage: combatBlade,
    rarity: 0,
  },
  {
    name: 'Composite Bow',
    simulacraName: '',
    weaponImage: compositeBow,
    rarity: 0,
  },
  {
    name: 'EM Blade',
    simulacraName: '',
    weaponImage: emBlade,
    rarity: 0,
  },
  {
    name: 'Frosted Spear',
    simulacraName: '',
    weaponImage: frostedSpear,
    rarity: 0,
  },
  {
    name: 'Weapon Battery III',
    simulacraName: '',
    weaponImage: weaponBatteryIII,
    rarity: 0,
  },
];

const GachaItemMap: {[index: string]: GachaItem} = GachaItems.reduce(
  (acc, cur) => {
    return {
      ...acc,
      [cur.name]: cur,
    };
  },
  {},
);

export const getItemData = (name: string) => {
  return GachaItemMap[name];
};

export default GachaItems;
