interface ICountry {
  _id: number;
  iso2: string;
  iso3: string;
  country: string;
  lat: number;
  long: number;
  flag: string;
}

interface IData {
  country: string;
  countryInfo: ICountry;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  updated: number;
}

interface IAddCountryDataAction {
  type: string;
  countryData: IData;
}

const addCountryData = (state = {}, action: IAddCountryDataAction) => {
  if (action.type === `addCountryData`) {
    const newState = { ...action.countryData };
    return newState;
  }
  if (action.type === `clearCountryData`) {
    return {};
  }
  return state;
};

export default addCountryData;
