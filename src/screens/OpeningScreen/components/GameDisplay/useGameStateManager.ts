import { useState } from 'react';

type GameStatesTypes = 'AnimationOpening' | 'GameScreen';

export interface GameState {
  name: GameStatesTypes;
  isPaused: boolean;
}

const initialState: GameState = { name: 'AnimationOpening', isPaused: false };

export const useGameStateManager = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const redirectToGameScreen = () => {
    setGameState({ name: 'GameScreen', isPaused: false });
  };

  const togglePauseState = () => {
    setGameState(prevState => ({
      ...prevState,
      isPaused: !prevState.isPaused,
    }));
  };

  return { gameState, redirectToGameScreen, togglePauseState };
};
