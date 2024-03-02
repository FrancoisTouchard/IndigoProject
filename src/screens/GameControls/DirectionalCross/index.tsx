import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { DirectionalArrow } from './DirectionalArrow';

const DirectionalCrossComponent = () => {
  return (
    <View style={styles.crossContainer}>
      <DirectionalArrow arrowType={'top'} />
      <DirectionalArrow arrowType={'bottom'} />
      <DirectionalArrow arrowType={'right'} />
      <DirectionalArrow arrowType={'left'} />
    </View>
  );
};

const styles = StyleSheet.create({
  crossContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export const DirectionalCross = memo(DirectionalCrossComponent);
