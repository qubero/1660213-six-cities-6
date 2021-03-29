import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classNames from 'classnames';
import {CityNames} from '../../const';
import {changeCity} from '../../store/action';

const CityList = () => {
  const dispatch = useDispatch();
  const {activeCity} = useSelector((state) => state.MAIN);

  const handleCityClick = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(evt.target.innerText));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityNames).map((city) =>
            <li key={city} className="locations__item">
              <a href="#"
                className={classNames(`locations__item-link tabs__item`, {'tabs__item--active': city === activeCity})}
                onClick={handleCityClick}
              >
                <span>{city}</span>
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export {CityList};
export default CityList;
