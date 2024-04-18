import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { AbButton } from './AbButton';

export type PrimaryButtonType = {
  buttonType: 'A' | 'B';
};

export interface ABButtonProps {
  handlePlayerCurrentInteraction?: () => void;
  closeCurrentInteraction?: () => void;
}

type PrimaryButtonProps = PrimaryButtonType & ABButtonProps;

const PrimaryButtonComponent = ({
  buttonType,
  handlePlayerCurrentInteraction,
  closeCurrentInteraction,
}: PrimaryButtonProps) => {
  const onPrimaryButtonPress = () => {
    if (buttonType === 'A' && handlePlayerCurrentInteraction) {
      handlePlayerCurrentInteraction();
    }
    if (buttonType === 'B' && closeCurrentInteraction) {
      closeCurrentInteraction();
    }
  };

  return (
    <View style={styles.abButtonContainer}>
      <TouchableOpacity
        onPress={onPrimaryButtonPress}
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
  },
  singleButtonContainer: {
    flex: 1,
  },
});

export const PrimaryButton = memo(PrimaryButtonComponent);
