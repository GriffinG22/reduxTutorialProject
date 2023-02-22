import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store';

import classes from './Header.module.css';

const Header = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  const loggedInNavContent = (
      <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
      </ul>
  )

  const loggedOutNavContent = (
    <ul>
      <li>
        <button>Login</button>
      </li>
    </ul>
  )

  const navLinkContent = isAuthenticated ? loggedInNavContent : loggedOutNavContent;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {navLinkContent}
      </nav>
    </header>
  );
};
 
export default Header;
