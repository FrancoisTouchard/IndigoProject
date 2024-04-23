import { useState } from 'react';

import { ArrowType } from '../../../GameControls/DirectionalCross/DirectionalArrow/types';
import { GameState } from '../../useGameStateManager';

export const usePlayerCurrentInteraction = (
  currentTileAllocation: string,
  isPressedPreviousValue: React.MutableRefObject<false | ArrowType>,
  togglePauseState: () => void,
  gameState: GameState,
  selectedMenuItem: number,
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
    if (playerCurrentInteraction === 'APC' && clickedMenuItem === 'POKéDEX') {
      closePcInteraction();
    } else {
      setPlayerCurrentInteraction(null);
      togglePauseState();
    }

    setClickedMenuItem(null);
  };

  const closePcInteraction = () => {
    setPlayerCurrentInteraction('APC');
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
        if (gameState.isPaused) {
          switch (selectedMenuItem) {
            case 0:
              setClickedMenuItem('POKéDEX');
              break;
            case 1:
              setClickedMenuItem('POKéMON');
              break;
            case 2:
              setClickedMenuItem('EXIT');
              break;
            default:
              break;
          }
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
