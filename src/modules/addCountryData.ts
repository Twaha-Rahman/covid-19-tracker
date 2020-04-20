import ICountryData from '../interfaces/ICountryData';

interface IAddCountryDataAction {
  type: string;
  countryData: ICountryData;
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
