import React, { FC } from 'react';
import { 
  makeStyles,  
  createStyles, 
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { CityInfoProps } from '../../data/interfaces'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      position: 'relative',
      padding: 16
    },
    info: {
      display: 'flex',
      alignItems: 'center'
    },
    temperature: {
      fontSize: 32
    },
    description: {
      textTransform: 'uppercase',
      marginLeft: 16
    },
    iconButton: {
      position: 'absolute',
      top: 8,
      right: 4
    },
    header: {
      padding: '0 0 16px',
      borderBottom: '1px solid #eee'
    },
    content: {
      padding: '0 !important'
    },
    actions: {
      padding: 0
    }
  }),
);

interface CityCardProps {
  cityInfo: CityInfoProps
}

export const CityCard: FC<CityCardProps> = ({
  cityInfo, 
}) => {
  const classes = useStyles();
  const navigate = useNavigate()

  const { id, name, country, temperature, description, humidity, windSpeed, iconUrl } = cityInfo

  const navigateToOtherCity = (id: number) => {
    navigate(`/city/${id}`);
  }

  return <Card className={classes.card}>
    <CardHeader
      title={name}
      subheader={country}
      className={classes.header}
    />
    <CardContent className={classes.content}>
      <p className={classes.info} onClick={() => navigateToOtherCity(id)}>
        <span className={classes.temperature}>{ Math.floor(temperature)}°C</span>
        { iconUrl && <img src={ iconUrl } alt={ description } />}
        <span className={classes.description}>{ description }</span>
      </p>
      <p>Humidity: { humidity }%</p>
      <p>Wind: { windSpeed }m/s</p>
    </CardContent>
  </Card>
}