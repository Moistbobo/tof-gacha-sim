import React from 'react';
import {Box, Card, Typography} from '@mui/material';
import GachaItems, {GachaItem} from '../../../../assets/data/GachaItems';
import GachaItemRenderer from '../GachaItemRenderer';

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
  );
};

export default RollSummary;
