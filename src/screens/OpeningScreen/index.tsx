import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { GameControls } from './components/GameControls';
import { useDirectionalCross } from './components/GameControls/DirectionalCross/useDirectionalCross';
import { GameDisplay } from './components/GameDisplay';
import { COLLISION_OVERLAP_IN_PIXELS } from './components/GameDisplay/GameScreen/RoomsBackgrounds/LobbyRoom/LobbyRoomMap';
import { useLobbyRoom } from './components/GameDisplay/GameScreen/RoomsBackgrounds/LobbyRoom/useLobbyRoom';
import { findTileAllocation } from './components/GameDisplay/GameScreen/RoomsBackgrounds/tileAllocationHelpers';
import { findPlayerPositionWithOffset } from './components/GameDisplay/GameScreen/RoomsBackgrounds/tileMapHelpers';
import { usePlayerCurrentInteraction } from './components/GameDisplay/GameScreen/RoomsBackgrounds/usePlayerCurrentInteraction';
import { useGameStateManager } from './components/GameDisplay/useGameStateManager';

const OpeningScreenComponent = () => {
  const { gameState, redirectToGameScreen } = useGameStateManager();
  const { isPressed, panResponder } = useDirectionalCross();
  const { offsetY, offsetX } = useLobbyRoom(isPressed);
  const { currentTileYArrayCoordinate, currentTileXArrayCoordinate } =
    findPlayerPositionWithOffset(
      offsetY + COLLISION_OVERLAP_IN_PIXELS,
      offsetX - COLLISION_OVERLAP_IN_PIXELS,
    );
  const currentTileAllocation = findTileAllocation(
    currentTileYArrayCoordinate,
    currentTileXArrayCoordinate,
  );
  const { playerCurrentInteraction, handlePlayerCurrentInteraction } =
    usePlayerCurrentInteraction(currentTileAllocation, isPressed);

  return (
    <View style={styles.gameAndControlsContainer}>
      <GameDisplay gameState={gameState} isPressed={isPressed} />
      <GameControls
        panResponder={panResponder}
        isPressed={isPressed}
        redirectToGameScreen={redirectToGameScreen}
        handlePlayerCurrentInteraction={handlePlayerCurrentInteraction}
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
