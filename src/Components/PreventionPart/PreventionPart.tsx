import * as React from 'react';
import './PreventionPart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import WebP from '../../Components/WebP/WebP';
import selfDistancingWebp from '../../assets/photos/webP/iconfinder_keep_distance_social_1_5964546.webp';
import selfDistancingNormal from '../../assets/photos/normal/iconfinder_keep_distance_social_1_5964546.png';
import washingHandsWebp from '../../assets/photos/webP/iconfinder___wash_hand_soap_5925226.webp';
import washingHandsNormal from '../../assets/photos/normal/iconfinder___wash_hand_soap_5925226.png';
import wearMaskWebp from '../../assets/photos/webP/iconfinder_facial_mask_coronavirus_5964544.webp';
import wearMaskNormal from '../../assets/photos/normal/iconfinder_facial_mask_coronavirus_5964544.png';
import PreventionImgBlock from '../PreventionImgBlock/PreventionImgBlock';
import { Link } from 'react-router-dom';

const PreventionPart: React.SFC<{}> = (props) => {
  return (
    <Link to="/prevention">
      <div className="prevention-part-container">
        <h2>Prevention</h2>
        <div className="imgs-container">
          <div className="img-container">
            <WebP normalLink={selfDistancingNormal} webpLink={selfDistancingWebp} altText="self-distancing" />
            <p>Social Distancing</p>
          </div>
          <div className="img-container">
            <WebP normalLink={washingHandsNormal} webpLink={washingHandsWebp} altText="self-distancing" />
            <p>Wash Your Hands</p>
          </div>
          <div className="img-container">
            <WebP normalLink={wearMaskNormal} webpLink={wearMaskWebp} altText="self-distancing" />
            <p>Wear A Mask</p>
          </div>
        </div>
        <h4>Learn More <FontAwesomeIcon icon={faChevronRight} /></h4>
      </div>
    </Link>
  );
};

export default PreventionPart;
