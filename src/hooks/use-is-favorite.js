import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AuthorizationStatus, AppRoutes} from '../const';
import {sendFavoriteStatus} from '../store/api-actions';

export const useIsFavorite = (initialFavorite) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(null);
  const isAuth = useSelector(({USER}) =>
    USER.authorizationStatus === AuthorizationStatus.AUTH
  );

  useEffect(() => {
    setIsFavorite(initialFavorite);
  }, [initialFavorite]);

  const handleFavoriteClick = (id, status) => {
    if (!isAuth) {
      history.push(AppRoutes.LOGIN);
    } else {
      dispatch(sendFavoriteStatus(id, +status));
      setIsFavorite(!!status);
    }
  };

  return [isFavorite, handleFavoriteClick];
};
