import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { LobbyRoom } from './RoomsBackgrounds/LobbyRoom';

const GameScreenComponent = () => {
  return (
    <View style={styles.container}>
      <LobbyRoom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});

export const GameScreen = memo(GameScreenComponent);
