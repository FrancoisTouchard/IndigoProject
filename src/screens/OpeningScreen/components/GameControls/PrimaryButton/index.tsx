import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { AbButton } from './AbButton';
import { AbButtonProps } from './AbButton/types';

const PrimaryButtonComponent = ({
  buttonType,
  handlePlayerCurrentInteraction,
}: AbButtonProps) => {
  return (
    <View style={styles.abButtonContainer}>
      <TouchableOpacity
        onPress={handlePlayerCurrentInteraction}
        style={styles.singleButtonContainer}
        accessibilityRole="button">
        <AbButton buttonType={buttonType} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  abButtonContainer: {
    width: '25%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleButtonContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const PrimaryButton = memo(PrimaryButtonComponent);
