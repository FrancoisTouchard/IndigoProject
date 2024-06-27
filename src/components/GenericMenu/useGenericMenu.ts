import { useEffect, useState } from 'react';
import { IsPressedType } from 'src/screens/OpeningScreen/components/GameDisplay/types';

export const useGenericMenu = (
  isPressed: IsPressedType,
  menuItems: string[],
  onMenuItemPress: (selectedItem: string) => void,
) => {
  const [selectorPosition, setSelectorPosition] = useState(0);
  const menuItemsLength = menuItems.length;

  const navigateMenu = (selectorValue: 'up' | 'down') => {
    if (selectorValue === 'up')
      setSelectorPosition(prevSelectorPosition =>
        prevSelectorPosition === 0
          ? menuItemsLength - 1
          : prevSelectorPosition - 1,
      );
    else
      setSelectorPosition(prevSelectorPosition =>
        prevSelectorPosition === menuItemsLength - 1
          ? 0
          : prevSelectorPosition + 1,
      );
  };

  useEffect(() => {
    if (isPressed === 'up' || isPressed === 'down') navigateMenu(isPressed);
    if (isPressed === 'A') {
      const selectedItem = menuItems[selectorPosition];
      onMenuItemPress(selectedItem);
    }
  }, [isPressed]);

  return { selectorPosition };
};
