import {useState} from 'react';

export const useIsActive = (currentId) => {
  const [activeOfferId, setActiveOfferId] = useState(currentId);

  const handleActiveOfferId = (id) => {
    setActiveOfferId(id);
  };

  return [activeOfferId, handleActiveOfferId];
};
