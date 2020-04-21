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
        <span>
          <FontAwesomeIcon icon={faHome} className="nav-item" />
        </span>
      </NavLink>
      <NavLink to="/analytics/global" activeClassName="active-nav-link" className="nav-item-container">
        <span>
          <FontAwesomeIcon icon={faChartBar} className="nav-item" />
        </span>
      </NavLink>

      <NavLink to="/news" activeClassName="active-nav-link" className="nav-item-container">
        <span>
          <FontAwesomeIcon icon={faNewspaper} className="nav-item" />
        </span>
      </NavLink>

      <NavLink to="/info" activeClassName="active-nav-link" className="nav-item-container">
        <span>
          <FontAwesomeIcon icon={faInfoCircle} className="nav-item" />
        </span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
