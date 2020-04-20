import INews from '../interfaces/INews';

interface IAddNews {
  type: string;
  news: INews[];
}

const addNews = (state = [], action: IAddNews) => {
  if (action.type === `addNews`) {
    const newState = [...action.news];
    return newState;
  }
  if (action.type === `clearNews`) {
    return [];
  }
  return state;
};

export default addNews;
