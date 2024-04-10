import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { AbButton } from './AbButton';

export interface PrimaryButtonProps {
  handlePlayerCurrentInteraction?: () => void;
  buttonType: 'A' | 'B';
}

const PrimaryButtonComponent = ({
  buttonType,
  handlePlayerCurrentInteraction,
}: PrimaryButtonProps) => {
  return (
    <View style={styles.abButtonContainer}>
      <TouchableOpacity
        onPress={handlePlayerCurrentInteraction}
        style={styles.container}
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
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const PrimaryButton = memo(PrimaryButtonComponent);
