import * as React from 'react';
import './Loading.css';

const Loading: React.SFC<{}> = (props) => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
