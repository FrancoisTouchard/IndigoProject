import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArrowType } from '../../GameControls/DirectionalCross/DirectionalArrow/types';
import { GameStatesTypes } from '../useGameStateManager';
import { Player } from './Player';
import { PlayerCurrentInteraction } from './PlayerCurrentInteraction';
import { LobbyRoom } from './RoomsBackgrounds/LobbyRoom';

interface GameScreenProps {
  isPressed: ArrowType | false;
  offsetY: number;
  offsetX: number;
  playerCurrentInteraction: string | null;
  gameState: GameStatesTypes;
}

const GameScreenComponent = ({
  isPressed,
  offsetY,
  offsetX,
  playerCurrentInteraction,
  gameState,
}: GameScreenProps) => {
  if (gameState !== 'GameScreen') return null;

  return (
    <View style={styles.container}>
      <LobbyRoom offsetY={offsetY} offsetX={offsetX} />
      <Player
        isPressed={isPressed}
        playerCurrentInteraction={playerCurrentInteraction}
      />
      <PlayerCurrentInteraction
        playerCurrentInteraction={playerCurrentInteraction}
        isPressed={isPressed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const GameScreen = memo(GameScreenComponent);
