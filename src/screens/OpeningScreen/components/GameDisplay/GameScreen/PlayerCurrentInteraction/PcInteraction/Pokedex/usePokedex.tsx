import { useEffect, useState } from 'react';
import { ArrowType } from 'src/screens/OpeningScreen/components/GameControls/DirectionalCross/DirectionalArrow/types';

import { PokemonDataProps } from '.';

export const usePokedex = (
  isPressed: ArrowType | false,
  menuItems: PokemonDataProps[],
) => {
  const [focusedPokedexItem, setFocusedPokedexItem] = useState<number>(0);
  const [clickedPokedexItem, setClickedPokedexItem] = useState<string | null>(
    null,
  );

  const navigateMenu = (selectorValue: 'up' | 'down') => {
    if (selectorValue === 'up')
      setFocusedPokedexItem(prevIndex =>
        prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1,
      );
    else
      setFocusedPokedexItem(prevIndex =>
        prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1,
      );
  };

  const resetFocusedPokedexItemState = () => {
    setFocusedPokedexItem(0);
  };

  const resetClickedPokedexItemState = () => {
    setClickedPokedexItem(null);
  };

  const onPokedexItemClick = () => {
    setClickedPokedexItem(menuItems[focusedPokedexItem].name);
  };

  useEffect(() => {
    if (isPressed === 'up' || isPressed === 'down') navigateMenu(isPressed);
  }, [isPressed]);

  return {
    focusedPokedexItem,
    resetFocusedPokedexItemState,
    onPokedexItemClick,
    clickedPokedexItem,
    resetClickedPokedexItemState,
  };
};
