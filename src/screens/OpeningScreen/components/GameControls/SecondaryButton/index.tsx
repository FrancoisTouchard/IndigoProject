import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { StartSelButton } from './StartSelButton';
import { StartSelButtonProps } from './StartSelButton/types';

const SecondaryButtonComponent = ({
  buttonType,
  onPress,
}: StartSelButtonProps) => {
  return (
    <View style={styles.startSelButtonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        accessibilityRole="button">
        <StartSelButton buttonType={buttonType} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  startSelButtonContainer: {
    width: '30%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SecondaryButton = memo(SecondaryButtonComponent);
