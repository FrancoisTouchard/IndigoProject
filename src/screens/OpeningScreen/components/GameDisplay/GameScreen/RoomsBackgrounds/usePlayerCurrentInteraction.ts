import { useState } from 'react';

import { IsPressedType } from '../../types';
import { GameState } from '../../useGameStateManager';

export const usePlayerCurrentInteraction = (
  currentTileAllocation: string,
  previousPlayerOrientation: React.MutableRefObject<IsPressedType>,
  togglePauseState: () => void,
  gameState: GameState,
  setAButtonIsPressed: () => void,
  setBButtonIsPressed: () => void,
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

  const pressButtonAndCloseInteraction = () => {
    setBButtonIsPressed();
    closeCurrentInteraction();
  };

  const closeCurrentInteraction = () => {
    setBButtonIsPressed();

    if (playerCurrentInteraction === 'APC') {
      setPlayerCurrentInteraction(null);
      togglePauseState();
    }
  };

  const handlePlayerCurrentInteraction = () => {
    switch (currentTileAllocation) {
      case 'APKC':
        if (previousPlayerOrientation.current === 'up') {
          setCurrentInteractionWithPauseState();
        }

        break;
      case 'APC':
        if (!gameState.isPaused && previousPlayerOrientation.current === 'up') {
          setCurrentInteractionWithPauseState();
        }

        break;
      case 'APS':
        if (previousPlayerOrientation.current === 'left') {
          setCurrentInteractionWithPauseState();
        }

        break;
      case 'EX':
        if (previousPlayerOrientation.current === 'up') {
          setCurrentInteractionWithPauseState();
        }

        break;
      default:
        break;
    }
    setAButtonIsPressed();
  };

  return {
    playerCurrentInteraction,
    handlePlayerCurrentInteraction,
    pressButtonAndCloseInteraction,
    closeCurrentInteraction,
  };
};
