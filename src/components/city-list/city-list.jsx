import React from 'react';
import classNames from 'classnames';
import {CityNames} from '../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

const CityList = ({activeCity, onCityChange}) => {
  const handleCityClick = (evt) => {
    evt.preventDefault();
    onCityChange(evt.target.innerText);
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

const mapStateToProps = ({activeCity}) => ({activeCity});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

CityList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired
};

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
