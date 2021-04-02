import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {AppRoutes} from '../../const';
import {privateRoutePropTypes} from '../../prop-types.prop';
import {getIsAuth} from '../../store/user/selectors';

const PrivateRoute = ({children, ...props}) => {
  const isAuth = useSelector(getIsAuth);

  return (
    <Route {...props}>
      {isAuth
        ? children
        : <Redirect to={AppRoutes.LOGIN} />}
    </Route>
  );
};

PrivateRoute.propTypes = privateRoutePropTypes;

export {PrivateRoute};
export default PrivateRoute;
