import * as React from 'react';
import './Switch.css';
import { NavLink } from 'react-router-dom';

interface ISwitchProps {
  names: string[];
}

const Switch: React.SFC<ISwitchProps> = (props) => {
  return (
    <div className="switch-container">
      <NavLink to="/analytics/global" activeClassName="active-switch" className="switch">
        <h3>{props.names[0]}</h3>
      </NavLink>
      <NavLink to="/analytics/country" activeClassName="active-switch" className="switch">
        <h3>{props.names[1]}</h3>
      </NavLink>
    </div>
  );
};

export default Switch;
