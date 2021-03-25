import React from 'react';
import {AppRoutes} from '../../const';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../screens/main-screen/main-screen';
import AuthScreen from '../screens/auth-screen/auth-screen';
import RoomScreen from '../screens/room-screen/room-screen';
import FavoritesScreen from '../screens/favorites-screen/favorites-screen';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';
import browserHistory from '../../browser-history';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <MainScreen />
        </Route>
        <PrivateRoute exact path={AppRoutes.FAVORITES}>
          <FavoritesScreen />
        </PrivateRoute>
        <Route exact path={AppRoutes.LOGIN}>
          <AuthScreen />
        </Route>
        <Route exact path={AppRoutes.OFFER_ID}>
          <RoomScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
