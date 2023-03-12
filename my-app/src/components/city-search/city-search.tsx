import React, { FC, useState } from 'react';
import { makeStyles, createStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

import { fetchWeatherDataByName } from '../../services/weather-forecast.service';
import { CityInfoProps } from '../../data/interfaces'
import { CityCard } from "../../components/city-card";

const useStyles = makeStyles(() =>
  createStyles({
    search: {
      position: 'relative',
      padding: '2px 4px',
      margin: '0 0 36px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    results: {
      padding: 16,
    },
    error: {
      position: 'absolute',
      bottom: -28,
      right: 0,
      color: '#e53935'
    }
  }),
);

interface CitySearchProps {
  onAddCity: (data: any) => void,
  onRemoveCity: (id: number) => void
}

export const CitySearch: FC<CitySearchProps> = ({
  onAddCity,
  onRemoveCity
}) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState<CityInfoProps | null>(null)

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchCity = (searchValue: string) => {
    fetchWeatherDataByName(searchValue)
    .then(
      result => setSearchResult(result)
    )  
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter'){
      handleSearchCity(searchValue)
    }
  }

  return <div>
    <Paper className={classes.search}>
      <InputBase
        className={classes.input}
        placeholder="Enter city..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchValue}
        onChange={changeSearchValue}
        onKeyPress={handleKeyPress}
      />
      <IconButton 
        className={classes.iconButton} 
        aria-label="search" 
        onClick={() => handleSearchCity(searchValue)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
    {
      searchResult == null ? null : 
        <CityCard 
          cityInfo={searchResult}
        />
    }
  </div>
}