import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { turquoise } from '../../../assets/AnimationOpening/stylesColorsCode';
import { DirectionalCross } from './DirectionalCross';
import { PrimaryButton } from './PrimaryButton/index';
import { SecondaryButton } from './SecondaryButton/index';

const GameControlsComponent = () => {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.primaryControlsContainer}>
        <DirectionalCross />
        <PrimaryButton buttonType={'A'} />
        <PrimaryButton buttonType={'B'} />
      </View>
      <View style={styles.secondaryControlsContainer}>
        <SecondaryButton buttonType={'Start'} />
        <SecondaryButton buttonType={'Select'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    width: '100%',
    height: '55%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: turquoise,
  },
  primaryControlsContainer: {
    width: '100%',
    height: '50%',
    marginTop: '20%',
    marginBottom: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  secondaryControlsContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const GameControls = memo(GameControlsComponent);
