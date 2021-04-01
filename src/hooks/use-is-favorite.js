import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AuthorizationStatus, AppRoutes} from '../const';
import {sendFavoriteStatus} from '../store/api-actions';
import {updateOffers} from '../store/action';

export const useIsFavorite = (initialFavorite) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(null);
  const isAuth = useSelector(({USER}) =>
    USER.authorizationStatus === AuthorizationStatus.AUTH
  );
  const offers = useSelector(({OFFERS}) => OFFERS.offers);

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
