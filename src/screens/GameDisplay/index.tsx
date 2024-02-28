import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { black } from '../../../assets/AnimationOpening/stylesColorsCode';
import { AnimationOpening } from './AnimationOpening/index';

const GameDisplayComponent = () => {
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

export const GameDisplay = memo(GameDisplayComponent);
