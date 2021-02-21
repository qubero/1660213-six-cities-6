import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import PropTypes from 'prop-types';
import {offerCardPropTypes} from '../../../prop-types.prop';

const FavoritesScreen = ({offers}) => {
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

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          offerCardPropTypes,
      ),
  ).isRequired
};

export default FavoritesScreen;
