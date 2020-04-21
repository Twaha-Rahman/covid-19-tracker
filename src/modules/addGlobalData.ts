import IGlobalData from '../interfaces/IGlobalData';
interface IAddGlobalDataAction {
  type: string;
  globalData: IGlobalData;
}

const addGlobalData = (state = {}, action: IAddGlobalDataAction) => {
  if (action.type === `addGlobalData`) {
    const newState = { ...action.globalData };
    return newState;
  }
  if (action.type === `clearGlobalData`) {
    return {};
  }
  return state;
};

export default addGlobalData;
