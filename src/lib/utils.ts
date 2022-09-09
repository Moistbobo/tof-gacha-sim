import {Banner, BANNER_ENUM, Banners} from '../assets/data/Banners';

export const getRandomRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const randomFromList = (list: any[]) => {
  return list[Math.floor(Math.random() * list.length)];
};

export const getGachaItemFromRoll = (
  roll: number,
  bannerId: BANNER_ENUM,
): string => {
  const activeBanner: Banner = Banners.find(x => x.id === bannerId) as Banner;

  const {
    units: {SSR, SR, MISC, R},
  } = activeBanner;

  // SR
  if (roll < 75) {
    // 50-50 for featured unit
    if (activeBanner.featuredUnits) {
      const fifty = getRandomRange(0, 2);
      console.log('f', fifty);
      if (fifty === 0) {
        return activeBanner.featuredUnits.SSR[0];
      }
    }
    return randomFromList(SSR);
  }
  if (roll < 175) {
    return randomFromList(SR);
  }
  if (roll < 860) return randomFromList(MISC);
  return randomFromList(R);
};
