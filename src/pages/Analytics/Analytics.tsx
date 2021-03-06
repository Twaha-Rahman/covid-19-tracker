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
  dispatch: any;
}

class Analytics extends React.Component<IAnalytics, {}> {
  constructor(props: any) {
    super(props);
  }

  public async componentDidMount() {
    const globalData = await fetch('https://corona.lmao.ninja/v2/all?yesterday=true');
    const globalDataParsed = await globalData.json();

    const countryData = await fetch('https://corona.lmao.ninja/v2/countries/bangladesh?yesterday=true');
    const countryDataParsed = await countryData.json();

    this.props.dispatch({
      type: 'addCountryData',
      countryData: countryDataParsed,
    });

    this.props.dispatch({
      type: 'addGlobalData',
      globalData: globalDataParsed,
    });
  }

  public render() {
    let JSXTorender;

    JSXTorender = <Loading />;
    if (this.props.location.pathname === '/analytics/') {
      if (this.props.store.addGlobalData.cases) {
        JSXTorender = (
          <main className="info-box-container">
            <InfoBox
              title={'Total Affected'}
              number={this.props.store.addGlobalData.cases}
              bcackgroundColor={'var(--custom-yellow)'}
            />
            <InfoBox
              title={'Deaths Today'}
              number={this.props.store.addGlobalData.todayDeaths}
              bcackgroundColor={'var(--custom-red)'}
            />
            <InfoBox
              title={'Affected Today'}
              number={this.props.store.addGlobalData.todayCases}
              bcackgroundColor={'var(--custom-yellow)'}
            />
            <InfoBox
              title={'Total Deaths'}
              number={this.props.store.addGlobalData.deaths}
              bcackgroundColor={'var(--custom-red)'}
            />
            <InfoBox
              title={'Recovered'}
              number={this.props.store.addGlobalData.recovered}
              bcackgroundColor={'var(--custom-green)'}
            />
            <InfoBox
              title={'Active'}
              number={this.props.store.addGlobalData.active}
              bcackgroundColor={'var(--custom-blue)'}
            />
            <InfoBox
              title={'Critical Cases'}
              number={this.props.store.addGlobalData.critical}
              bcackgroundColor={'var(--custom-purple)'}
            />
            <InfoBox
              title={'Affected Countries'}
              number={this.props.store.addGlobalData.affectedCountries}
              bcackgroundColor={'var(--custom-red)'}
            />

            <InfoBox
              title={'Persons Tested'}
              number={this.props.store.addGlobalData.tests}
              bcackgroundColor={'var(--custom-yellow)'}
            />
            <InfoBox
              title={'Persons Tested Per Million People'}
              number={this.props.store.addGlobalData.testsPerOneMillion}
              bcackgroundColor={'var(--custom-yellow)'}
            />
          </main>
        );
      }
    }

    if (this.props.location.pathname === '/analytics/country') {
      if (this.props.store.addCountryData.cases) {
        JSXTorender = (
          <main className="info-box-container">
            <InfoBox
              title={'Recovered'}
              number={this.props.store.addCountryData.recovered}
              bcackgroundColor={'var(--custom-green)'}
            />
            <InfoBox
              title={'Total Affected'}
              number={this.props.store.addCountryData.cases}
              bcackgroundColor={'var(--custom-yellow)'}
            />
            <InfoBox
              title={'Deaths Today'}
              number={this.props.store.addCountryData.todayDeaths}
              bcackgroundColor={'var(--custom-red)'}
            />
            <InfoBox
              title={'Affected Today'}
              number={this.props.store.addCountryData.todayCases}
              bcackgroundColor={'var(--custom-yellow)'}
            />
            <InfoBox
              title={'Total Deaths'}
              number={this.props.store.addCountryData.deaths}
              bcackgroundColor={'var(--custom-red)'}
            />
            <InfoBox
              title={'Active'}
              number={this.props.store.addCountryData.active}
              bcackgroundColor={'var(--custom-blue)'}
            />
            <InfoBox
              title={'Critical Cases'}
              number={this.props.store.addCountryData.critical}
              bcackgroundColor={'var(--custom-purple)'}
            />

            <InfoBox
              title={'Affected Per Million'}
              number={this.props.store.addCountryData.casesPerOneMillion}
              bcackgroundColor={'var(--custom-yellow)'}
            />
          </main>
        );
      }
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
        {JSXTorender}
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Analytics));
