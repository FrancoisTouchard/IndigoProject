import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArrowType } from '../../GameControls/DirectionalCross/DirectionalArrow/types';
import { Player } from './Player';
import { LobbyRoom } from './RoomsBackgrounds/LobbyRoom';

export interface GameScreenTypes {
  isPressed: ArrowType | false;
}

const GameScreenComponent = ({ isPressed }: GameScreenTypes) => {
  return (
    <View style={styles.container}>
      <LobbyRoom />
      <Player isPressed={isPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export const GameScreen = memo(GameScreenComponent);
