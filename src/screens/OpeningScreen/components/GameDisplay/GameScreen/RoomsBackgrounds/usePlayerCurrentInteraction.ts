import { useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';

export const usePlayerCurrentInteraction = (
  currentTileAllocation: string,
  isPressedPreviousValue: React.MutableRefObject<false | ArrowType>,
  togglePauseState: () => void,
) => {
  const [playerCurrentInteraction, setPlayerCurrentInteraction] = useState<
    string | null
  >(null);

  const setCurrentInteractionWithPauseState = () => {
    setPlayerCurrentInteraction(currentTileAllocation);
    togglePauseState();
  };

  const closeCurrentInteraction = () => {
    setPlayerCurrentInteraction(null);
    togglePauseState();
  };

  const handlePlayerCurrentInteraction = () => {
    switch (currentTileAllocation) {
      case 'APKC':
        if (isPressedPreviousValue.current === 'up') {
          console.log('Welcome to the PokéCenter !');
          setCurrentInteractionWithPauseState();
        }
        break;

      case 'APC':
        if (isPressedPreviousValue.current === 'up') {
          console.log('PC is booting');
          setCurrentInteractionWithPauseState();
        }
        break;

      case 'APS':
        if (isPressedPreviousValue.current === 'left') {
          console.log('Welcome to the shop !');
          setCurrentInteractionWithPauseState();
        }

        break;

      case 'EX':
        if (isPressedPreviousValue.current === 'up') {
          console.log('You have no Pokémon !');
          setCurrentInteractionWithPauseState();
        }
        break;

      default:
        break;
    }
  };

  return {
    playerCurrentInteraction,
    handlePlayerCurrentInteraction,
    closeCurrentInteraction,
  };
};
