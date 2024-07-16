import { useState } from 'react';

export const usePCMenu = (closeCurrentInteraction: () => void) => {
  const [isPokedexPressed, setIsPokedexPressed] = useState<boolean>(false);
  /**
   * prévision des interactions futures du Menu
   */
  const onPokedexPress = () => {
    setIsPokedexPressed(true);
  };
  const onPokemonPress = () => {};
  const onExitPress = () => {
    closeCurrentInteraction();
  };

  const onMenuItemPress = (clickedItem: string) => {
    if (clickedItem === 'POKéDEX') onPokedexPress();
    if (clickedItem === 'POKéMON') onPokemonPress();
    if (clickedItem === 'EXIT') onExitPress();
  };

  return { onMenuItemPress, isPokedexPressed };
};
