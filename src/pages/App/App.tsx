import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import mapStateToProps from '../../utilities/mapStateToProp';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Components/Button/Button';
import PreventionPart from '../../Components/PreventionPart/PreventionPart';
import ImgBanner from '../../Components/ImgBanner/ImgBanner';
import WebP from '../../Components/WebP/WebP';
import CoughingWebp from '../../assets/photos/webP/iconfinder___cough_tissue_close_mouth_5925234.webp';
import CoughingNormal from '../../assets/photos/normal/iconfinder___cough_tissue_close_mouth_5925234.png';

import IStore from '../../interfaces/IStore';

interface IApp extends RouteComponentProps {
  store: IStore;
}

class App extends React.Component<IApp, {}> {
  constructor(props: IApp) {
    super(props);
    console.log(this.props);
  }

  public render() {
    return (
      <div className="app-body">
        <header className="app-upper-part">
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
        </header>
        <div className="app-lower-part">
          <PreventionPart />

          <ImgBanner
            title="Do your own test!"
            description="Follow the instructions to do a self test."
            imgJSX={<WebP webpLink={CoughingWebp} normalLink={CoughingNormal} altText="Woman Coughing" />}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
