import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useIsFavorite} from '../../hooks/use-is-favorite';

const BookmarkButton = ({id, offerIsFavorite}) => {
  const [isFavorite, handleFavoriteClick] = useIsFavorite(offerIsFavorite);

  return (
    <button
      className={classNames(
          `property__bookmark-button button`,
          {'property__bookmark-button--active': isFavorite}
      )}
      type="button"
      onClick={() => handleFavoriteClick(id, !isFavorite)}
      data-testid="property-bookmark-button"
    >
      <svg
        className="property__bookmark-icon"
        width="31"
        height="33"
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  id: PropTypes.string.isRequired,
  offerIsFavorite: PropTypes.bool.isRequired
};

export {BookmarkButton};
export default BookmarkButton;
