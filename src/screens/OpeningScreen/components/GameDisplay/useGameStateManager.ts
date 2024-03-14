import { useState } from 'react';

export type GameStatesTypes = 'AnimationOpening' | 'GameScreen';

export const useGameStateManager = () => {
  const [gameState, setGameState] =
    useState<GameStatesTypes>('AnimationOpening');

  const redirectToGameScreen = () => {
    setGameState('GameScreen');
  };

  return { gameState, redirectToGameScreen };
};
