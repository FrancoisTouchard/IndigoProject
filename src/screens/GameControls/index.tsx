import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { turquoise } from '../../../assets/AnimationOpening/stylesColorsCode';

const GameControlsComponent = () => {
  return <View style={styles.controlsContainer} />;
};

const styles = StyleSheet.create({
  controlsContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: turquoise,
  },
});

export const GameControls = memo(GameControlsComponent);
