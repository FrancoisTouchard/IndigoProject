import { useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { GameState } from '../../useGameStateManager';

export const usePlayerCurrentInteraction = (
  currentTileAllocation: string,
  isPressedPreviousValue: React.MutableRefObject<false | ArrowType>,
  togglePauseState: () => void,
  gameState: GameState,
  resetFocusedMenuItemState: () => void,
  onMenuItemClick: () => void,
  clickedMenuItem: string | null,
  setClickedMenuItem: (clickedMenuItem: string | null) => void,
) => {
  const [playerCurrentInteraction, setPlayerCurrentInteraction] = useState<
    string | null
  >(null);

  const setCurrentInteractionWithPauseState = () => {
    if (!gameState.isPaused) {
      setPlayerCurrentInteraction(currentTileAllocation);
      togglePauseState();
    }
  };

  const closeMenuOption = () => {
    setPlayerCurrentInteraction(currentTileAllocation);
  };

  const closeCurrentInteraction = () => {
    if (clickedMenuItem) {
      closeMenuOption();
    } else {
      setPlayerCurrentInteraction(null);
      togglePauseState();
    }

    setClickedMenuItem(null);
    resetFocusedMenuItemState();
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
        if (!gameState.isPaused && isPressedPreviousValue.current === 'up') {
          console.log('PC is booting');
          setCurrentInteractionWithPauseState();
        }
        if (gameState.isPaused) {
          onMenuItemClick();
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
