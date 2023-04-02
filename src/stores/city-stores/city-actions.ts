import {
    CITY_ADD,
    CITY_DELETE,
    CityAddAction,
    CityDeleteAction
  } from '../../data/interfaces';
  
  export const cityAdd = (data: {id: number, name: string}): CityAddAction => {
    const id = data.id;
    const name = data.name;
    return {
      type: CITY_ADD,
      payload: {  id, name, data },
    };
  };
  
  export const cityDelete = (id: number): CityDeleteAction => ({
      type: CITY_DELETE,
      payload: id,
  })