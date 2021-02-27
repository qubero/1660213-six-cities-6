import React, {useState} from 'react';
import classNames from 'classnames';
import {SortType} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const OfferSort = ({activeSort, onSortChange}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleSortChange = (evt) => {
    if (activeSort !== evt.target.innerText) {
      onSortChange(evt.target.innerText);
    }

    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSortClick}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames(`places__options places__options--custom`, {'places__options--opened': isOpened})}>
        {Object.values(SortType).map((sortType) =>
          <li
            key={sortType}
            tabIndex="0"
            className={classNames(`places__option`, {'places__option--active': sortType === activeSort})}
            onClick={handleSortChange}
          >{sortType}</li>
        )}
      </ul>
    </form>
  );
};

const mapStateToProps = ({activeSort}) => ({activeSort});

const mapDispatchToProps = (dispatch) => ({
  onSortChange(sortType) {
    dispatch(ActionCreator.changeSort(sortType));
  }
});

OfferSort.propTypes = {
  activeSort: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired
};

export {OfferSort};
export default connect(mapStateToProps, mapDispatchToProps)(OfferSort);

