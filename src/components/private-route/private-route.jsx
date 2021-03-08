import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus, AppRoutes} from '../../const';
import {privateRoutePropTypes} from '../../prop-types.prop';

const PrivateRoute = ({authorizationStatus, children, ...props}) => {
  return (
    <Route {...props}>
      {authorizationStatus === AuthorizationStatus.AUTH
        ? children
        : <Redirect to={AppRoutes.LOGIN} />}
    </Route>
  );
};

PrivateRoute.propTypes = privateRoutePropTypes;

const mapStateToProps = ({authorizationStatus}) => ({authorizationStatus});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
