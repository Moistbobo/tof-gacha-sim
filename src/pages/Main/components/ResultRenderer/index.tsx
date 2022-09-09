import React from 'react';
import {Card} from '@mui/material';
import {getItemData, RARITY_ENUM} from '../../../../assets/data/GachaItems';

type Props = {
  rolls: string[];
};

const colorMap: any = {
  [RARITY_ENUM.R]: 'blue',
  [RARITY_ENUM.SR]: 'purple',
  [RARITY_ENUM.SSR]: 'gold',
};

const ResultRenderer = ({rolls}: Props) => {
  const rollData = React.useMemo(() => {
    return rolls.map((x) => getItemData(x));
  }, [rolls]);

  console.log(rollData);
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        width: '60vw',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {rollData.map((x) => (
        <img
          alt={x?.name}
          style={{
            borderRadius: 2,
            padding: 0.5,
            backgroundColor: colorMap[x.rarity],
            margin: 2,
          }}
          src={x?.weaponImage}
        />
      ))}
    </Card>
  );
};

export default ResultRenderer;
