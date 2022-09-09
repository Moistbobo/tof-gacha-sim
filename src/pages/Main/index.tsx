import React from 'react';
import {Box, Button, Paper} from '@mui/material';
import {Banner, BANNER_ENUM, Banners} from '../../assets/data/Banners';
import {getGachaItemFromRoll, getRandomRange} from '../../lib/utils';
import ResultRenderer from './components/ResultRenderer';
import CurrencyUsedWindow from './components/CurrencyUsedWindow';
import useStyles from './useStyles';

const Main = () => {
  const styles = useStyles();
  const [selectedBanner] = React.useState<BANNER_ENUM>(BANNER_ENUM.RED_LOTUS);

  const [totalRolls, setTotalRolls] = React.useState(0);

  const [gachaResult, setGachaResult] = React.useState<string[]>([]);

  const pityCounter = React.useRef(1);

  const activeBanner: Banner = React.useMemo(() => {
    return Banners.find((x) => x.id === selectedBanner) as Banner;
  }, [selectedBanner]);

  const handleRollGacha = React.useCallback(
    (numRolls: number) => {
      const rollResult = new Array(numRolls).fill(0).map(() => {
        const roll = getRandomRange(0, 10000);
        if (pityCounter.current === 80) {
          pityCounter.current = 1;
          return 74;
        }
        if (pityCounter.current > 0 && pityCounter.current % 10 === 0) {
          pityCounter.current += 1;
          return Math.min(174, roll);
        }

        pityCounter.current += 1;

        return roll;
      });

      setTotalRolls((prev) => prev + numRolls);

      setGachaResult(
        rollResult.map((x) => getGachaItemFromRoll(x, selectedBanner)),
      );
    },
    [activeBanner, pityCounter],
  );

  return (
    <Paper sx={styles.container}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <CurrencyUsedWindow numRolls={totalRolls} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
          }}>
          {/* <Button variant="contained" onClick={() => handleRollGacha(1)}> */}
          {/*  Roll 1 */}
          {/* </Button> */}

          <Button variant="contained" onClick={() => handleRollGacha(10)}>
            Roll 10
          </Button>

          <Button variant="contained" onClick={() => handleRollGacha(80)}>
            Roll 80
          </Button>

          <Button variant="contained" onClick={() => handleRollGacha(120)}>
            Roll 120
          </Button>
        </Box>

        <ResultRenderer rolls={gachaResult} />
      </Box>
    </Paper>
  );
};

export default Main;
