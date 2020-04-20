import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import mapStateToProps from '../../utilities/mapStateToProp';
import './Analytics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Switch from '../../Components/Switch/Switch';

import IStore from '../../interfaces/IStore';

interface IAnalytics extends RouteComponentProps {
  store: IStore;
}

class Analytics extends React.Component<IAnalytics, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <header className="app-upper-part switch-upper-part">
        <div className="hamburger-bell-container">
          <div className="menu-button"></div>
          <FontAwesomeIcon icon={faBell} className="bell-icon" />
        </div>
        <h2>Statistics</h2>
        <Switch names={['Global', 'Country']} />
      </header>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Analytics));
