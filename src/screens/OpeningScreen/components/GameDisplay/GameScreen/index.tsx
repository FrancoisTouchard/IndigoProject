import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArrowType } from '../../GameControls/DirectionalCross/DirectionalArrow/types';
import { Player } from './Player';
import { LobbyRoom } from './RoomsBackgrounds/LobbyRoom';

export interface LobbyRoomProps {
  offsetY: number;
  offsetX: number;
}

interface PlayerProps {
  isPressed: ArrowType | false;
}

type GameScreenProps = LobbyRoomProps & PlayerProps;

const GameScreenComponent = ({
  isPressed,
  offsetY,
  offsetX,
}: GameScreenProps) => {
  return (
    <View style={styles.container}>
      <LobbyRoom offsetY={offsetY} offsetX={offsetX} />
      <Player isPressed={isPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const GameScreen = memo(GameScreenComponent);
