import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { GameControls } from './components/GameControls';
import { useDirectionalCross } from './components/GameControls/DirectionalCross/useDirectionalCross';
import { GameDisplay } from './components/GameDisplay';
import { useMenu } from './components/GameDisplay/GameScreen/Menu/useMenu';
import { PC_MENU_ITEMS } from './components/GameDisplay/GameScreen/PlayerCurrentInteraction/PcInteraction';
import { getPlayerPosition } from './components/GameDisplay/GameScreen/PlayerPositionIndicator/playerPositionHelpers';
import { useLobbyRoom } from './components/GameDisplay/GameScreen/RoomsBackgrounds/LobbyRoom/useLobbyRoom';
import { usePlayerCurrentInteraction } from './components/GameDisplay/GameScreen/RoomsBackgrounds/usePlayerCurrentInteraction';
import { useGameStateManager } from './components/GameDisplay/useGameStateManager';

const OpeningScreenComponent = () => {
  const { gameState, redirectToGameScreen, togglePauseState } =
    useGameStateManager();
  const { isPressed, panResponder, isPressedPreviousValue } =
    useDirectionalCross();
  const {
    isPressed: isPressedInteraction,
    panResponder: panResponderInteraction,
  } = useDirectionalCross();
  const { offsetY, offsetX } = useLobbyRoom(isPressed);
  const { currentTileAllocation } = getPlayerPosition(offsetY, offsetX);
  const { focusedMenuItem } = useMenu(isPressedInteraction, PC_MENU_ITEMS);
  const {
    playerCurrentInteraction,
    handlePlayerCurrentInteraction,
    closeCurrentInteraction,
    clickedMenuItem,
  } = usePlayerCurrentInteraction(
    currentTileAllocation,
    isPressedPreviousValue,
    togglePauseState,
    gameState,
    focusedMenuItem,
  );

  return (
    <View style={styles.gameAndControlsContainer}>
      <GameDisplay
        gameState={gameState}
        isPressed={!playerCurrentInteraction ? isPressed : isPressedInteraction}
        offsetY={offsetY}
        offsetX={offsetX}
        playerCurrentInteraction={playerCurrentInteraction}
        focusedMenuItem={focusedMenuItem}
        clickedMenuItem={clickedMenuItem}
      />
      <GameControls
        panResponder={
          !playerCurrentInteraction ? panResponder : panResponderInteraction
        }
        isPressed={!playerCurrentInteraction ? isPressed : isPressedInteraction}
        redirectToGameScreen={redirectToGameScreen}
        handlePlayerCurrentInteraction={handlePlayerCurrentInteraction}
        closeCurrentInteraction={closeCurrentInteraction}
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
