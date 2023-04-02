import { Action } from 'redux';

export interface CityInfoProps {
    id: number
    name: string
    country: string
    temperature: number
    humidity: number
    description: string
    windSpeed: number
    iconUrl?: string
}

export const CITY_ADD = 'CITY_ADD';
export const CITY_DELETE = 'CITY_DELETE';

export interface CityProps {
  id: number;
  name: string;
  data?: unknown;
}

export interface CityStateProps {
  cities: CityProps[];
}

export interface CityAddAction extends Action<string> {
  payload: {
    id: number;
    name: string;
    data: unknown;
  }
}

export interface CityDeleteAction extends Action<string> {
  payload: number;
}

export type CityActionTypes =
  | CityAddAction
  | CityDeleteAction;