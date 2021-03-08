import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus, AppRoutes} from '../../const';
import {headerPropTypes} from '../../prop-types.prop';

const Header = ({authorizationStatus, userInfo}) => {
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoutes.FAVORITES : AppRoutes.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {isAuth
                    ? <span className="header__user-name user__name">{userInfo.email}</span>
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

Header.propTypes = headerPropTypes;

const mapStateToProps = ({authorizationStatus, userInfo}) => ({authorizationStatus, userInfo});

export {Header};
export default connect(mapStateToProps)(Header);
