import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AppRoutes} from '../const';
import {sendFavoriteStatus} from '../store/api-actions';
import {updateOffers} from '../store/action';
import {getIsAuth} from '../store/user/selectors';
import {getOffers} from '../store/offers-data/selectors';

export const useIsFavorite = (initialFavorite) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(null);
  const isAuth = useSelector(getIsAuth);
  const offers = useSelector(getOffers);

  useEffect(() => {
    setIsFavorite(initialFavorite);
  }, [initialFavorite]);

  const handleFavoriteClick = (id, status) => {
    if (!isAuth) {
      history.push(AppRoutes.LOGIN);
    } else {
      const newOffers = offers.map((offer) => {
        if (offer.id === Number(id)) {
          return {
            ...offer,
            isFavorite: status
          };
        }

        return offer;
      });

      dispatch(sendFavoriteStatus(id, +status));
      dispatch(updateOffers(newOffers));
      setIsFavorite(!!status);
    }
  };

  return [isFavorite, handleFavoriteClick];
};
