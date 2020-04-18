import * as React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IButtonProps {
  text: string;
  bgColor: string;
  icon: IconDefinition;
}

const Button: React.SFC<IButtonProps> = (props) => {
  return (
    <button className="button" style={{ backgroundColor: props.bgColor }}>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
