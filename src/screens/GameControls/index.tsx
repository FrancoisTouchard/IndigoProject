import { turquoise } from 'assets/AnimationOpening/stylesColorsCode';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const GameControls = () => {
  return <View style={styles.controlsContainer} />;
};

const styles = StyleSheet.create({
  controlsContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: turquoise,
  },
});

export default GameControls;
