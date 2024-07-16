import { useEffect, useState } from 'react';
import { IsPressedType } from 'src/screens/OpeningScreen/components/GameDisplay/types';

const INITIAL_SELECTOR_POSITION = 0;

export const useGenericList = (
  isPressed: IsPressedType,
  menuItems: string[],
  onMenuItemPress: (selectedItem: string) => void,
) => {
  const [selectorPosition, setSelectorPosition] = useState(
    INITIAL_SELECTOR_POSITION,
  );

  const navigateMenu = (selectorValue: 'up' | 'down') => {
    if (selectorValue === 'up')
      setSelectorPosition(prevSelectorPosition =>
        prevSelectorPosition === INITIAL_SELECTOR_POSITION
          ? menuItems.length - 1
          : prevSelectorPosition - 1,
      );
    else
      setSelectorPosition(prevSelectorPosition =>
        prevSelectorPosition === menuItems.length - 1
          ? INITIAL_SELECTOR_POSITION
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
