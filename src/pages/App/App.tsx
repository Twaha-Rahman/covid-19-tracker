import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStateToProps from '../../utilities/mapStateToProp';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Components/Button/Button';
import PreventionPart from '../../Components/PreventionPart/PreventionPart';

import IHistory from '../../interfaces/IHistory';
import ILocation from '../../interfaces/ILocation';
import IMatch from '../../interfaces/IMatch';
import IStore from '../../interfaces/IStore';

interface IApp {
  dispatch: any;
  history: IHistory;
  location: ILocation;
  match: IMatch;
  staticContext: any;
  store: IStore;
}

class App extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
    console.log(this.props);
  }

  public render() {
    return (
      <div className="app-body">
        <div className="app-upper-part">
          <div className="hamburger-bell-container">
            <div className="menu-button"></div>
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
          </div>
          <h2>Covid-19 Tracker</h2>
          <div className="short-info">
            <h3>Are you feeling sick?</h3>
            <p>
              If you feel sick then you might want to see a doctor immediately. The symptoms of Covid-19 can take a few
              days or even a few weeks to reveal. Proper medication can help cure this disease.
            </p>
            <Button text="See Symptoms" bgColor="var(--custom-blue)" icon={faEye} />
          </div>
        </div>
        <div className="app-lower-part">
          <PreventionPart />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
