import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { StartSelButton } from './StartSelButton';
import { StartSelButtonProps } from './StartSelButton/types';

const SecondaryButtonComponent = ({ buttonType }: StartSelButtonProps) => {
  return (
    <View style={styles.abButtonContainer}>
      <StartSelButton buttonType={buttonType} />
    </View>
  );
};

const styles = StyleSheet.create({
  abButtonContainer: {
    width: '30%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SecondaryButton = memo(SecondaryButtonComponent);
