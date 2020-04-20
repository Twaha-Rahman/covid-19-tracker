import ICountryData from '../interfaces/ICountryData';
import IGlobalData from '../interfaces/IGlobalData';

interface IStore {
  addCountryData: ICountryData | {};
  addGlobalData: IGlobalData | {};
}

export default IStore;
