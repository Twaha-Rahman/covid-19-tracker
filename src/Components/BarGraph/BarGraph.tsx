import * as React from 'react';
import './BarGraph.css';

interface IBarGraphProps {
  name: string;
}

const BarGraph: React.SFC<IBarGraphProps> = (props) => {
  return <div className="bar-graph-container">graph goes here</div>;
};

export default BarGraph;
