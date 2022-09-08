import React from 'react';
import {Box, Button, Card, Paper} from '@mui/material';
import {Banner, BANNER_ENUM, Banners} from '../../assets/data/Banners';
import {getGachaItemFromRoll, getRandomRange} from '../../lib/utils';

const Main = () => {
  const [selectedBanner] = React.useState<BANNER_ENUM>(BANNER_ENUM.RED_LOTUS);

  const [totalRolls, setTotalRolls] = React.useState(0);

  const [gachaResult, setGachaResult] = React.useState<string[]>([]);

  const pityCounter = React.useRef(1);

  const activeBanner: Banner = React.useMemo(() => {
    return Banners.find(x => x.id === selectedBanner) as Banner;
  }, [selectedBanner]);

  const handleRollGacha = React.useCallback(
    (numRolls: number) => {
      const rollResult = new Array(numRolls).fill(0).map(() => {
        const roll = getRandomRange(0, 10000);
        if (pityCounter.current === 80) {
          console.log('SSR Pity');
          pityCounter.current = 1;
          return 74;
        }
        if (pityCounter.current > 0 && pityCounter.current % 10 === 0) {
          console.log('SR Pity');
          pityCounter.current += 1;
          return Math.min(174, roll);
        }
        console.log(pityCounter.current);

        pityCounter.current += 1;

        return roll;
      });

      setTotalRolls(prev => prev + numRolls);

      console.log(rollResult);
      setGachaResult(
        rollResult.map(x => getGachaItemFromRoll(x, selectedBanner)),
      );
    },
    [activeBanner, pityCounter],
  );

  return (
    <Paper
      sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        flexDirection: 'column',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Card
          sx={{
            padding: 4,
            alignSelf: 'center',
            width: '60vw',
          }}>
          <Box>{`Num rolls: ${totalRolls}`}</Box>
          <Box>{`Roll Result: ${gachaResult.join(', ')}`}</Box>
        </Card>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
          }}>
          <Button variant="contained" onClick={() => handleRollGacha(1)}>
            Roll 1
          </Button>

          <Button variant="contained" onClick={() => handleRollGacha(10)}>
            Roll 10
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Main;
