import React from 'react';
import {connect} from 'react-redux';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import {offersListPropTypes} from '../../../prop-types.prop';

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

FavoritesScreen.propTypes = offersListPropTypes;

const mapStateToProps = (state) => ({
  offers: state.offers.filter((offer) => offer.isFavorite)
});

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
