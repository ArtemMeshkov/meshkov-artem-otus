import * as cities from '../data/cities.json'

const wftGeoApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1';

// Не юзаю, тк нужен апи ключ (платно, судя по всему)
export const getCities = async (filter: string) => {
    const data = await fetch(wftGeoApiUrl + 'geo/cities' + (filter ? `?namePrefix=${filter}` : ''));
    return getCities;

}

export const getCitiesByJson = (filter: string) => {
    const citiesJson = (cities as any).filter((c: any) => c.name.includes(filter));
    return citiesJson;
}