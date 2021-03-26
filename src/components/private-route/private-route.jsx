import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus, AppRoutes} from '../../const';
import {privateRoutePropTypes} from '../../prop-types.prop';

const PrivateRoute = ({children, ...props}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  return (
    <Route {...props}>
      {authorizationStatus === AuthorizationStatus.AUTH
        ? children
        : <Redirect to={AppRoutes.LOGIN} />}
    </Route>
  );
};

PrivateRoute.propTypes = privateRoutePropTypes;

export {PrivateRoute};
export default PrivateRoute;
