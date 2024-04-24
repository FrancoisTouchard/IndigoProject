import { useEffect, useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { PC_MENU_ITEMS } from '../PlayerCurrentInteraction/PcInteraction';

export const useMenu = (
  isPressed: ArrowType | false,
  currentTileAllocation: string,
) => {
  const [focusedMenuItem, setFocusedMenuItem] = useState<number>(0);

  let menuItems: string[];
  switch (currentTileAllocation) {
    case 'APC':
      menuItems = PC_MENU_ITEMS;
      break;
    default:
      break;
  }

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

  const resetFocusedMenuItemState = () => {
    setFocusedMenuItem(0);
  };

  useEffect(() => {
    if (isPressed === 'up' || isPressed === 'down') navigateMenu(isPressed);
  }, [isPressed]);

  return { focusedMenuItem, resetFocusedMenuItemState };
};
