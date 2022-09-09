import React from 'react';
import {Card} from '@mui/material';
import {GachaItem, getItemData} from '../../../../assets/data/GachaItems';
import GachaItemRenderer from '../GachaItemRenderer';

type Props = {
  rolls: string[];
};

const ResultRenderer = ({rolls}: Props) => {
  const rollData = React.useMemo(() => {
    return rolls.map((x) => getItemData(x));
  }, [rolls]);

  const renderItem = React.useCallback(
    (x: GachaItem) => <GachaItemRenderer item={x} />,
    [],
  );

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
      {rollData.map(renderItem)}
    </Card>
  );
};

export default ResultRenderer;
