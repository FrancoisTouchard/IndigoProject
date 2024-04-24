import { useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { GameState } from '../../useGameStateManager';
import { PC_MENU_ITEMS } from '../PlayerCurrentInteraction/PcInteraction';

export const usePlayerCurrentInteraction = (
  currentTileAllocation: string,
  isPressedPreviousValue: React.MutableRefObject<false | ArrowType>,
  togglePauseState: () => void,
  gameState: GameState,
  focusedMenuItem: number,
  resetFocusedMenuItemState: () => void,
) => {
  const [playerCurrentInteraction, setPlayerCurrentInteraction] = useState<
    string | null
  >(null);
  const [clickedMenuItem, setClickedMenuItem] = useState<string | null>(null);

  const setCurrentInteractionWithPauseState = () => {
    if (!gameState.isPaused) {
      setPlayerCurrentInteraction(currentTileAllocation);
      togglePauseState();
    }
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

  const closeMenuOption = () => {
    setPlayerCurrentInteraction(currentTileAllocation);
  };

  const onMenuItemClick = () => {
    switch (focusedMenuItem) {
      case 0:
        setClickedMenuItem(PC_MENU_ITEMS[0]);
        break;
      case 1:
        setClickedMenuItem(PC_MENU_ITEMS[1]);
        break;
      case 2:
        closeCurrentInteraction();
        break;
      default:
        break;
    }
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
    clickedMenuItem,
  };
};
