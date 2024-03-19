import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { AbButton } from './AbButton';
import { AbButtonProps } from './AbButton/types';

const PrimaryButtonComponent = ({ buttonType }: AbButtonProps) => {
  return (
    <View style={styles.abButtonContainer}>
      <AbButton buttonType={buttonType} />
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
});

export const PrimaryButton = memo(PrimaryButtonComponent);
