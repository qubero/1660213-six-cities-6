import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus, AppRoutes} from '../../const';

const Header = () => {
  const {authorizationStatus, userInfo} = useSelector((state) => state.USER);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to="/"
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
                data-testid="header-logo"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={isAuth ? AppRoutes.FAVORITES : AppRoutes.LOGIN}
                >
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    {...(
                      userInfo.avatar && {
                        style: {
                          backgroundImage: `url('${userInfo.avatar}')`
                        }
                      }
                    )}
                    data-testid="user-avatar"
                  >
                  </div>
                  {isAuth
                    ? <span
                      className="header__user-name user__name"
                    >
                      {userInfo.email}
                    </span>
                    : <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export {Header};
export default Header;
