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

interface PlayerProps {
  isPressed: ArrowType | false;
}

interface PlayerInteractionProps {
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
      <Player isPressed={isPressed} />
      {playerCurrentInteraction && (
        <PlayerCurrentInteraction
          playerCurrentInteraction={playerCurrentInteraction}
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
