import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { DirectionalArrow } from './DirectionalArrow';
import { useDirectionalCross } from './useDirectionalCross';

export const ARROW_CONTAINER_DIMENSIONS = 150;
export const ARROW_CONTAINER_OFFSET_LEFT = 25;

const DirectionalCrossComponent = () => {
  const { panResponder, isPressed } = useDirectionalCross();

  return (
    <View style={styles.crossContainer} {...panResponder.panHandlers}>
      <DirectionalArrow arrowType={'up'} isPressed={isPressed} />
      <DirectionalArrow arrowType={'down'} isPressed={isPressed} />
      <DirectionalArrow arrowType={'right'} isPressed={isPressed} />
      <DirectionalArrow arrowType={'left'} isPressed={isPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  crossContainer: {
    width: ARROW_CONTAINER_DIMENSIONS,
    height: ARROW_CONTAINER_DIMENSIONS,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginLeft: ARROW_CONTAINER_OFFSET_LEFT,
  },
});

export const DirectionalCross = memo(DirectionalCrossComponent);
