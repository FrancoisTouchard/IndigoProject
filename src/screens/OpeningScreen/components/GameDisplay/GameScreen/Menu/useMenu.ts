import { useEffect, useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';

export const useMenu = (isPressed: ArrowType | false, menuItems: string[]) => {
  const [focusedMenuItem, setFocusedMenuItem] = useState<number>(0);

  const navigateMenu = (selectorValue: 'up' | 'down') => {
    if (selectorValue === 'up')
      setFocusedMenuItem(prevIndex =>
        prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1,
      );
    else
      setFocusedMenuItem(prevIndex =>
        prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1,
      );
  };

  useEffect(() => {
    if (isPressed === 'up' || isPressed === 'down') navigateMenu(isPressed);
  }, [isPressed]);

  return { focusedMenuItem };
};
