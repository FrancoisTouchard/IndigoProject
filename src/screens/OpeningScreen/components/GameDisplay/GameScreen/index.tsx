import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Player } from './Characters/Player';
import { LobbyRoom } from './RoomsBackgrounds/LobbyRoom';

export interface GameScreenTypes {
  tileSize: number;
  windowWidth: number;
  gameDisplayHeight: number;
}

const GameScreenComponent = ({
  tileSize,
  windowWidth,
  gameDisplayHeight,
}: GameScreenTypes) => {
  return (
    <View style={styles.container}>
      <LobbyRoom />
      <Player
        tileSize={tileSize}
        windowWidth={windowWidth}
        gameDisplayHeight={gameDisplayHeight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});

export const GameScreen = memo(GameScreenComponent);
