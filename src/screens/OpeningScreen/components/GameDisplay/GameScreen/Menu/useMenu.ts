import { useEffect, useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';

export const useMenu = (isPressed: ArrowType | false, menuItems: string[]) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const navigateMenu = (selectorValue: 'up' | 'down') => {
    if (selectorValue === 'up')
      setSelectedItem(prevIndex =>
        prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1,
      );
    else
      setSelectedItem(prevIndex =>
        prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1,
      );
  };

  useEffect(() => {
    if (isPressed === 'up' || isPressed === 'down') navigateMenu(isPressed);
  }, [isPressed]);

  return { selectedItem };
};
