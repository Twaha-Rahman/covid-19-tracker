import * as React from 'react';
import './PreventionPart.css';
import WebP from '../../Components/WebP/WebP';

const PreventionPart: React.SFC<{}> = (props) => {
  return (
    <div className="prevention-part-container">
      <h2>Prevention</h2>
      <div className="imgs-container">
        <div className="img-container">
          {/* <WebP  /> */}
          Some random text
        </div>
        <div className="img-container">
          {/* <WebP  /> */}
          Some random text
        </div>
        <div className="img-container">
          {/* <WebP  /> */}
          Some random text
        </div>
      </div>
    </div>
  );
};

export default PreventionPart;
