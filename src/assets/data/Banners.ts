export enum BANNER_ENUM {
  STANDARD,
  RED_LOTUS,
}

export type Banner = {
  name: string;

  id: BANNER_ENUM;

  featuredUnits?: {SSR: string[]};

  units: {
    MISC: string[];
    R: string[];
    SR: string[];
    SSR: string[];
  };
};

const StandardBanner: Banner = {
  name: 'Standard Banner',
  id: BANNER_ENUM.STANDARD,
  units: {
    MISC: ['Weapon battery III'],
    R: [
      'Combat Blade',
      'Frosted Spear',
      'EM Blade',
      'Composite Bow',
      'Combat Blade',
    ],
    SR: [
      "Nightingale's Feather",
      'Thunderous Halberd',
      'Pummeler',
      'Staff of Scars',
      'The Terminator',
    ],
    SSR: [
      'Absolute Zero',
      'Thunderblades',
      'Molten Shield V2',
      'Chakram of the Seas',
      'Scythe of the Crow',
      'Icewind Arrow',
      'Negating Cube',
      'Rosy Edge',
    ],
  },
};

const RedLotusBanner: Banner = {
  name: 'Red Lotus',
  id: BANNER_ENUM.RED_LOTUS,
  featuredUnits: {
    SSR: ['Guren Blade'],
  },
  units: StandardBanner.units,
};

export const Banners = [StandardBanner, RedLotusBanner];
