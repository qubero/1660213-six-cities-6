import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import {SortType} from '../../const';
import {changeSort} from '../../store/action';

const OfferSort = () => {
  const dispatch = useDispatch();

  const {activeSort} = useSelector((state) => state.MAIN);
  const [isOpened, setIsOpened] = useState(false);

  const handleSortClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleSortChange = (evt) => {
    if (activeSort !== evt.target.innerText) {
      dispatch(changeSort(evt.target.innerText));
    }

    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleSortClick}
        data-testid="sort-span"
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames(
            `places__options places__options--custom`,
            {'places__options--opened': isOpened}
        )}
        data-testid="places-options"
      >
        {Object.values(SortType).map((sortType) =>
          <li
            key={sortType}
            tabIndex="0"
            className={classNames(
                `places__option`,
                {'places__option--active': sortType === activeSort}
            )}
            onClick={handleSortChange}
            data-testid={sortType}
          >{sortType}</li>
        )}
      </ul>
    </form>
  );
};

export {OfferSort};
export default OfferSort;

