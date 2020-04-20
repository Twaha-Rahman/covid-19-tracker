interface IGlobalData {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  affectedCountries: number;
}

interface IAddGlobalDataAction {
  type: string;
  globalData: IGlobalData;
}

const addGlobalData = (state = {}, action: IAddGlobalDataAction) => {
  if (action.type === `addGlobalData`) {
    const newState = { ...action.globalData };
    return newState;
  }
  if (action.type === `addGlobalData`) {
    return {};
  }
  return state;
};

export default addGlobalData;
