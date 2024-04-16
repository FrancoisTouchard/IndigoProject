import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArrowType } from '../../GameControls/DirectionalCross/DirectionalArrow/types';
import { Player } from './Player';
import { PlayerCurrentInteraction } from './PlayerCurrentInteraction';
import { LobbyRoom } from './RoomsBackgrounds/LobbyRoom';

export interface LobbyRoomProps {
  offsetY: number;
  offsetX: number;
}

export interface PlayerProps {
  isPressed: ArrowType | false;
}

export interface PlayerInteractionProps {
  playerCurrentInteraction: string | null;
}

type GameScreenProps = LobbyRoomProps & PlayerProps & PlayerInteractionProps;

const GameScreenComponent = ({
  isPressed,
  offsetY,
  offsetX,
  playerCurrentInteraction,
}: GameScreenProps) => {
  return (
    <View style={styles.container}>
      <LobbyRoom offsetY={offsetY} offsetX={offsetX} />
      <Player
        isPressed={isPressed}
        playerCurrentInteraction={playerCurrentInteraction}
      />
      {playerCurrentInteraction && (
        <PlayerCurrentInteraction
          playerCurrentInteraction={playerCurrentInteraction}
          isPressed={isPressed}
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
