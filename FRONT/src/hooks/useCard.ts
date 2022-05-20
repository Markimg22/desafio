import { useContext } from 'react';

import { CardContext } from '../contexts';

export const useCard = () => {
  const value = useContext(CardContext);
  return value;
};
