import { configureStore } from '@reduxjs/toolkit';
import { CityStateProps } from '../../data/interfaces';

import { cityReducers } from './city-reducers';

const saveToLocalStorage = (state: CityStateProps) => {
  const serialisedState = JSON.stringify(state);
  localStorage.setItem("state", serialisedState);
}

const loadFromLocalStorage = () => {
  const serialisedState = localStorage.getItem("state");
  
  if (!serialisedState) return;

  return JSON.parse(serialisedState);
}

export const store = configureStore({
    reducer: cityReducers,
    preloadedState: loadFromLocalStorage()
    }
);

store.subscribe(() => saveToLocalStorage(store.getState()));