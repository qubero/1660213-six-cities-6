import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../screens/main-screen/main-screen';
import AuthScreen from '../screens/auth-screen/auth-screen';
import RoomScreen from '../screens/room-screen/room-screen';
import FavoritesScreen from '../screens/favorites-screen/favorites-screen';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/offer/:id">
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
