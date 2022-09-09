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

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '60vw',
        maxHeight: '75vh',
        overflowY: 'scroll',
        alignItems: 'center',
        marginY: 4,
        justifyContent: 'center',
      }}>
      {rollData.map((x) => (
        <img
          alt={x?.name}
          style={{
            width: '3.5rem',
            height: '3.5rem',
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
