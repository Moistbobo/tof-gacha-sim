import React from 'react';
import {Box, Card, Typography} from '@mui/material';
import numeral from 'numeral';
import EnvConfig from '../../../../config/EnvConfig';
import {darkCrystal, redNucleus} from '../../../../assets/images';

type Props = {
  /**
   * The total number of gacha rolls the user has made.
   */
  numRolls: number;
};

const CurrencyUsedWindow = ({numRolls}: Props) => {
  const usdUsed = React.useMemo(() => {
    return numeral(
      (numRolls * EnvConfig.dcPerRedNuc) / EnvConfig.dcPerUSD,
    ).format('$0,0.00');
  }, [numRolls]);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Box sx={{display: 'flex'}}>
        <img
          alt="redNucleus"
          src={redNucleus}
          style={{width: 30, height: 30}}
        />

        <Typography variant="body1">{numRolls}</Typography>
      </Box>

      <Box sx={{display: 'flex'}}>
        <img
          alt="darkCrystal"
          src={darkCrystal}
          style={{width: 30, height: 30}}
        />

        <Typography variant="body1">
          {numRolls * EnvConfig.dcPerRedNuc}
        </Typography>
      </Box>

      <Box sx={{display: 'flex'}}>
        <Typography variant="body2">USD</Typography>

        <Typography variant="body2">{usdUsed}</Typography>
      </Box>
    </Card>
  );
};

export default CurrencyUsedWindow;
