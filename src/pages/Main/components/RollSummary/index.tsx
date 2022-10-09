import React from 'react';
import {Box, Card, Typography} from '@mui/material';
import GachaItems, {
  GachaItem,
  RARITY_ENUM,
} from '../../../../assets/data/GachaItems';
import GachaItemRenderer from '../GachaItemRenderer';
import {flameGold} from '../../../../assets/images';

type Props = {
  allRolls: string[];
};

const RollSummary = ({allRolls}: Props) => {
  const rollSummary = React.useMemo(() => {
    return GachaItems.map((x) => ({
      item: x,
      count: allRolls.filter((y) => y === x.name).length,
    }));
  }, [allRolls]);

  const flameGolds = React.useMemo(() => {
    const SRUnitsDupes = rollSummary
      .filter((x) => x.item.rarity === RARITY_ENUM.SR)
      .reduce((acc, cur) => {
        return acc + Math.max(0, cur.count - 7);
      }, 0);

    const SSRUnitsDupes = rollSummary
      .filter((x) => x.item.rarity === RARITY_ENUM.SSR)
      .reduce((acc, cur) => {
        return acc + Math.max(0, cur.count - 7);
      }, 0);

    console.log(SRUnitsDupes);

    return allRolls.length + SRUnitsDupes + SSRUnitsDupes * 10;
  }, [rollSummary]);

  const renderGachaItem = React.useCallback(
    (item: {item: GachaItem; count: number}) => (
      <Box sx={{position: 'relative'}}>
        <GachaItemRenderer item={item.item} />
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            bottom: 0,
            color: 'black',
            backgroundColor: 'white',
          }}>
          {item.count}
        </Typography>
      </Box>
    ),
    [],
  );

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 1,
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img alt="flamegold" src={flameGold} style={{width: 40, height: 40}} />

        <Typography variant="body2">{flameGolds}</Typography>
      </Box>

      <Card
        sx={{
          position: 'absolute',
          top: 32,
          right: 0,
          display: 'flex',
          flexWrap: 'wrap',
          height: '90vh',
          width: '10vw',
          alignSelf: 'flex-end',
          overflowY: 'scroll',
        }}>
        {rollSummary.map(renderGachaItem)}
      </Card>
    </Card>
  );
};

export default RollSummary;
