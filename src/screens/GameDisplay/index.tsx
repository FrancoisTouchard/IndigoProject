import { black } from 'assets/AnimationOpening/stylesColorsCode';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AnimationOpening from './AnimationOpening/index';

const GameDisplay = () => {
  return (
    <View style={styles.gameDisplayContainer}>
      <AnimationOpening />
    </View>
  );
};

const styles = StyleSheet.create({
  gameDisplayContainer: {
    width: '100%',
    height: '55%',
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameDisplay;
