import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavoriteOffersList} from '../../../store/api-actions';
import {getCurrentFavoriteOffers} from '../../../store/offers-data/selectors';

import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import LoadingScreen from '../loading-screen/loading-screen';

const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const {offers, isOffersLoaded} = useSelector(getCurrentFavoriteOffers);

  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchFavoriteOffersList());
    }
  }, [isOffersLoaded]);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length
            ? <FavoritesList offers={offers} />
            : <FavoritesEmpty />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
};

export {FavoritesScreen};
export default FavoritesScreen;
