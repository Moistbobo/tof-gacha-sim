import React from 'react';
import {GachaItem, RARITY_ENUM} from '../../../../assets/data/GachaItems';

type Props = {
  /**
   * The item to render
   */
  item: GachaItem;
};

const colorMap: any = {
  [RARITY_ENUM.R]: 'blue',
  [RARITY_ENUM.SR]: 'purple',
  [RARITY_ENUM.SSR]: 'gold',
};

const GachaItemRenderer = ({item}: Props) => {
  return (
    <img
      alt={item?.name}
      style={{
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: 2,
        padding: 0.5,
        backgroundColor: colorMap[item.rarity],
        margin: 2,
      }}
      src={item?.weaponImage}
    />
  );
};

export default GachaItemRenderer;
