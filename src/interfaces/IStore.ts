import ICountryData from '../interfaces/ICountryData';
import IGlobalData from '../interfaces/IGlobalData';
import INews from '../interfaces/INews';

interface IStore {
  addCountryData: ICountryData;
  addGlobalData: IGlobalData;
  addNews: INews[];
}

export default IStore;
