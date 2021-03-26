import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import {getFavoriteOffers} from '../../../store/offers-data/selectors';

const FavoritesScreen = () => {
  const offers = useSelector(getFavoriteOffers);

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
