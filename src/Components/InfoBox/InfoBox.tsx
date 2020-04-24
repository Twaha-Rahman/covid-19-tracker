import * as React from 'react';
import './InfoBox.css';

interface IInfoBoxProps {
  title: string;
  number: number;
  bcackgroundColor: string;
}

const InfoBox: React.SFC<IInfoBoxProps> = (props) => {
  return (
    <div className="info-box" style={{ backgroundColor: props.bcackgroundColor }}>
      <h4>{props.title}</h4>
      <h3>{props.number}</h3>
    </div>
  );
};

export default InfoBox;
