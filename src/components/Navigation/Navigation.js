import { NavLink } from 'react-router-dom';
import style from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>USA Population</div>
      <nav className={style.navigation}>
        <NavLink
          to="/"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/state"
          className={style.link}
          activeClassName={style.activeLink}
        >
          State
        </NavLink>
        <NavLink
          to="/period"
          className={style.link}
          activeClassName={style.activeLink}
        >
          State & Period
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
