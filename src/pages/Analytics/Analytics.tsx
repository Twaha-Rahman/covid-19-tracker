import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import mapStateToProps from '../../utilities/mapStateToProp';
import './Analytics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Switch from '../../Components/Switch/Switch';

import IStore from '../../interfaces/IStore';
import InfoBox from '../../Components/InfoBox/InfoBox';
import Loading from '../../Components/Loading/Loading';

interface IAnalytics extends RouteComponentProps {
  store: IStore;
}

class Analytics extends React.Component<IAnalytics, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    if (!this.props.store.addGlobalData.cases) {
      return <Loading />;
    }

    return (
      <>
        <header className="app-upper-part switch-upper-part">
          <div className="hamburger-bell-container">
            <div className="menu-button"></div>
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
          </div>
          <h2>Statistics</h2>
          <Switch names={['Global', 'Country']} />
        </header>
        <main>
          <div className="info-box-container">
            <InfoBox
              title={'Total Affected'}
              number={this.props.store.addGlobalData.cases}
              bcackgroundColor={'var(--custom-yellow)'}
            />
            <InfoBox
              title={'Affected Today'}
              number={this.props.store.addGlobalData.todayCases}
              bcackgroundColor={'var(--custom-yellow)'}
            />
            <InfoBox
              title={'Total Deaths'}
              number={this.props.store.addGlobalData.cases}
              bcackgroundColor={'var(--custom-red)'}
            />
            <InfoBox
              title={'Deaths Today'}
              number={this.props.store.addGlobalData.todayCases}
              bcackgroundColor={'var(--custom-red)'}
            />
            <InfoBox
              title={'Reacovered'}
              number={this.props.store.addGlobalData.cases}
              bcackgroundColor={'var(--custom-green)'}
            />
            <InfoBox
              title={'Active'}
              number={this.props.store.addGlobalData.todayCases}
              bcackgroundColor={'var(--custom-blue)'}
            />
            <InfoBox
              title={'Critical'}
              number={this.props.store.addGlobalData.todayCases}
              bcackgroundColor={'var(--custom-purple)'}
            />
            <InfoBox
              title={'Affected Countries'}
              number={this.props.store.addGlobalData.todayCases}
              bcackgroundColor={'var(--custom-red)'}
            />
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Analytics));
