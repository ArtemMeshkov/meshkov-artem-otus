import React, { FC, useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CityActionTypes, CityInfoProps, CityProps, CityStateProps } from '../../data/interfaces'
import { fetchWeatherDataById, fetchCityForecast, DayProps, IDayProps, IExtendedCityProps } from '../../services/weather-forecast.service';
import { CityCard } from "../../components/city-card/city-card";
import { DailyForecast } from "../../components/daily-forecast/daily-forecast";
import { cityAdd, cityDelete } from '../../stores/city-stores/city-actions';

export const City: FC<CityPageProps> = ({ onAddCity }) =>{
  const [state, setState] = useState<CityPageState>({});

  const { id } = useParams();
  useEffect(() => {
    const cityId = parseInt(id as string);
    fetchWeatherData(cityId);
  }, []);

  async function fetchWeatherData(id: number) {
    const data = await fetchWeatherDataById(id);
    setState({
      cityData: data,
    });
    await handleDailyForecast(data);
  }

  const handleDailyForecast = async (data: IExtendedCityProps) => {
    const dataForecast = await fetchCityForecast(data.lat, data.lon);
    setState({ cityData: data, dailyForecast: dataForecast });

    //добавляет в localStorage, правда пока не придумал зачем, нужна актуальная инфа
    onAddCity(data);
  }

  const {cityData, dailyForecast} = state;
  const daily: IDayProps = {
    daily: dailyForecast as DayProps[],
  }

  const dailyForecase = dailyForecast && <DailyForecast daily={daily.daily} />;
  return cityData 
  ? <div>
      <CityCard cityInfo={cityData} /> 
      { dailyForecase }
    </div>
  : null

}

interface CityPageProps {
  cities: CityProps[];
  onAddCity: (data: ({id: number; name: string; })) => void;
  onRemoveCity: (id: number) => void;
}

interface CityPageState {
  cityData?: CityInfoProps;
  dailyForecast?: DayProps[];
}

const mapStateToProps = (state: CityStateProps) => ({
    cities: state.cities
})

const mapDispatchToProps = (dispatch: Dispatch<CityActionTypes>) => (
  {
    onAddCity: (data: ({id: number; name: string; })) => dispatch(cityAdd(data)),
    onRemoveCity: (id: number) => dispatch(cityDelete(id))
  }
)

export const CityPage = connect(mapStateToProps, mapDispatchToProps)(City)