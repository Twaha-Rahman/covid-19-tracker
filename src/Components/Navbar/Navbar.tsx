import * as React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faNewspaper, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface INavbarProps {
  currentPage: string;
}

const Navbar: React.SFC<INavbarProps> = (props) => {
  return (
    <nav className="navbar-container">
      <NavLink to="/" exact={true} activeClassName="active-nav-link" className="nav-item-container">
        <FontAwesomeIcon icon={faHome} className="nav-item" />
      </NavLink>
      <NavLink to="/analytics/global" activeClassName="active-nav-link" className="nav-item-container">
        <FontAwesomeIcon icon={faChartBar} className="nav-item" />
      </NavLink>

      <NavLink to="/news" activeClassName="active-nav-link" className="nav-item-container">
        <FontAwesomeIcon icon={faNewspaper} className="nav-item" />
      </NavLink>

      <NavLink to="/info" activeClassName="active-nav-link" className="nav-item-container">
        <FontAwesomeIcon icon={faInfoCircle} className="nav-item" />
      </NavLink>
    </nav>
  );
};

export default Navbar;
