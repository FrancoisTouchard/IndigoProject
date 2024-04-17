/* eslint-disable prettier/prettier */
import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { AbButton } from './AbButton';

type PrimaryButtonType = {
  buttonType: 'A' | 'B';
};

export type ABButtonConditionalProps =
  | {
    handlePlayerCurrentInteraction?: () => void;
    closeCurrentInteraction?: never;
  }
  | {
    closeCurrentInteraction?: () => void;
    handlePlayerCurrentInteraction?: never;
  };

type NewProps = PrimaryButtonType & ABButtonConditionalProps;

const PrimaryButtonComponent = ({
  buttonType,
  handlePlayerCurrentInteraction,
  closeCurrentInteraction,
}: NewProps) => {
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
