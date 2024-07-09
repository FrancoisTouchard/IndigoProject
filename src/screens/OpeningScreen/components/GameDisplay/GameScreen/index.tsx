import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { IsPressedType } from '../types';
import { GameState } from '../useGameStateManager';
import { PCMenu } from './PCMenu';
import { Player } from './Player';
import { LobbyRoom } from './RoomsBackgrounds/LobbyRoom';

interface GameScreenProps {
  isPressed: IsPressedType;
  offsetY: number;
  offsetX: number;
  playerCurrentInteraction: string | null;
  gameState: GameState;
  closeCurrentInteraction: () => void;
}

const GameScreenComponent = ({
  isPressed,
  offsetY,
  offsetX,
  playerCurrentInteraction,
  gameState,
  closeCurrentInteraction,
}: GameScreenProps) => {
  if (gameState.name !== 'GameScreen') return null;

  return (
    <View style={styles.container}>
      <LobbyRoom offsetY={offsetY} offsetX={offsetX} />
      <Player isPressed={isPressed} gameState={gameState} />
      {playerCurrentInteraction === 'APC' && (
        <PCMenu
          isPressed={isPressed}
          closeCurrentInteraction={closeCurrentInteraction}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const GameScreen = memo(GameScreenComponent);
