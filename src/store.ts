import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import addCountryData from './modules/addCountryData';
import addGlobalData from './modules/addGlobalData';
import addNews from './modules/addNews';

const fetchedDataSaverMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === 'addCountryData') {
    console.log('Save Country Stats Here...');
  }

  if (action.type === 'addGlobalData') {
    console.log('Save Global Stats Here...');
  }

  if (action.type === 'addNews') {
    console.log('Save News Here...');
  }

  next(action);
};

const reducers = combineReducers({
  addCountryData,
  addGlobalData,
  addNews,
});

const Store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(fetchedDataSaverMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
