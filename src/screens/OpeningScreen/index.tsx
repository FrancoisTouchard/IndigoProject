import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { GameControls } from './components/GameControls';
import { useDirectionalCross } from './components/GameControls/DirectionalCross/useDirectionalCross';
import { GameDisplay } from './components/GameDisplay';
import { getPlayerPosition } from './components/GameDisplay/GameScreen/PlayerPositionIndicator/playerPositionHelpers';
import { useLobbyRoom } from './components/GameDisplay/GameScreen/RoomsBackgrounds/LobbyRoom/useLobbyRoom';
import { usePlayerCurrentInteraction } from './components/GameDisplay/GameScreen/RoomsBackgrounds/usePlayerCurrentInteraction';
import { useGameStateManager } from './components/GameDisplay/useGameStateManager';

const OpeningScreenComponent = () => {
  const { gameState, redirectToGameScreen, togglePauseState } =
    useGameStateManager();
  const {
    isPressed,
    panResponder,
    playerOrientation,
    setAButtonIsPressed,
    setBButtonIsPressed,
    resetIsPressedState,
  } = useDirectionalCross(gameState.isPaused);
  const { offsetY, offsetX } = useLobbyRoom(isPressed, gameState);
  const { currentTileAllocation } = getPlayerPosition(offsetY, offsetX);

  const {
    playerCurrentInteraction,
    handlePlayerCurrentInteraction,
    pressButtonAndCloseInteraction,
    closeCurrentInteraction,
  } = usePlayerCurrentInteraction(
    currentTileAllocation,
    playerOrientation,
    togglePauseState,
    gameState,
    setAButtonIsPressed,
    setBButtonIsPressed,
    resetIsPressedState,
  );

  return (
    <View style={styles.gameAndControlsContainer}>
      <GameDisplay
        gameState={gameState}
        isPressed={isPressed}
        offsetY={offsetY}
        offsetX={offsetX}
        playerCurrentInteraction={playerCurrentInteraction}
        closeCurrentInteraction={closeCurrentInteraction}
      />
      <GameControls
        panResponder={panResponder}
        isPressed={isPressed}
        redirectToGameScreen={redirectToGameScreen}
        handlePlayerCurrentInteraction={handlePlayerCurrentInteraction}
        closeCurrentInteraction={pressButtonAndCloseInteraction}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gameAndControlsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export const OpeningScreen = memo(OpeningScreenComponent);
