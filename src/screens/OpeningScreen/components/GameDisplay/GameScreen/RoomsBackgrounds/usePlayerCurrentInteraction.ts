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
  resetIsPressedState: () => void,
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
    setAButtonIsPressed();
    switch (currentTileAllocation) {
      case 'APKC':
        if (previousPlayerOrientation.current === 'up') {
          setCurrentInteractionWithPauseState();
        }

        break;
      case 'APC':
        if (!gameState.isPaused && previousPlayerOrientation.current === 'up') {
          setCurrentInteractionWithPauseState();
          // voir avec LZ : j'ai besoin de reset isPressed pour qu'il ne reste pas sur "A" après avoir ouvert le pc, sinon ça gêne l'ouverture du pokédex
          resetIsPressedState();
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
  };

  return {
    playerCurrentInteraction,
    handlePlayerCurrentInteraction,
    pressButtonAndCloseInteraction,
    closeCurrentInteraction,
  };
};
