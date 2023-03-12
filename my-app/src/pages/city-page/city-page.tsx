import React, { FC, useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CityActionTypes, CityInfoProps, CityProps, CityStateProps } from '../../data/interfaces'
import { fetchWeatherDataById, fetchCityForecast } from '../../services/weather-forecast.service';
import { CityCard } from "../../components/city-card/city-card";
import { DailyForecast } from "../../components/daily-forecast/daily-forecast";
import { cityAdd, cityDelete } from '../../stores/city-stores/city-actions';

export const City: FC<CityPageProps> = (props: CityPageProps) =>{
  const [state, setState] = useState<CityPageState>({});

  let { id } = useParams();
  useEffect(() => {
    const cityId = parseInt(id as string);
    async function fetchWeatherData(id: any) {
      const data = await fetchWeatherDataById(cityId);
      setState({
        cityData: data,
      });
      await handleDailyForecast(data);
    }
    fetchWeatherData(cityId);
  }, []);

  const handleDailyForecast = async (data: any) => {
    const dataForecast = await fetchCityForecast(data.lat, data.lon);
    setState({ cityData: data, dailyForecast: dataForecast });

    //добавляет в localStorage, правда пока не придумал зачем, нужна актуальная инфа
    props.onAddCity(data);
  }

  const {cityData, dailyForecast} = state
  const dailyForecase = dailyForecast ? <DailyForecast daily={dailyForecast} /> : null;
  return cityData 
  ? <div>
      <CityCard cityInfo={cityData} /> 
      { dailyForecase }
    </div>
  : null

}

interface CityPageProps {
  cities: CityProps[];
  onAddCity: (data: any) => void;
  onRemoveCity: (id: number) => void;
}

interface CityPageState {
  cityData?: CityInfoProps;
  dailyForecast?: any
}

const mapStateToProps = (state: CityStateProps) => {
  return {
    cities: state.cities
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CityActionTypes>) => {
  return {
    onAddCity: (data: any) => dispatch(cityAdd(data)),
    onRemoveCity: (id: number) => dispatch(cityDelete(id))
  };
}

export const CityPage = connect(mapStateToProps, mapDispatchToProps)(City)