import React from 'react';
import { StyleSheet, View } from 'react-native';

import GameControls from '../GameControls/index';
import GameDisplay from '../GameDisplay/index';

const OpeningScreen = () => {
  return (
    <View style={styles.gameAndControlsContainer}>
      <GameDisplay />
      <GameControls />
    </View>
  );
};

const styles = StyleSheet.create({
  gameAndControlsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OpeningScreen;
