import React, { FC } from 'react';
import { 
  makeStyles,  
  createStyles, 
  Card
} from '@material-ui/core';
import { DayProps, IDayProps } from '../../services/weather-forecast.service'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      padding: 16,
      marginTop: 24,
      display: 'flex',
      justifyContent: 'space-between'
    },
    temp: {
      fontSize: 20
    }
  }),
);

export const DailyForecast: FC<IDayProps> = ({daily}) => {
  const classes = useStyles();

  return <Card className={classes.card}>
    {
      daily.map((item, index )=> {
          const { date, iconUrl, description, temp } = item;
          return <div key={index}>
            <div>{date}</div>
            <img src={iconUrl} alt={description} />
            <div className={classes.temp}>{Math.floor(temp)}°C</div>
          </div>
        }
      )
    }
  </Card>
}