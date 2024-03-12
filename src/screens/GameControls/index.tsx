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
        <View style={styles.abButtonsContainer}>
          <PrimaryButton buttonType={'B'} />
          <PrimaryButton buttonType={'A'} />
        </View>
      </View>
      <View style={styles.secondaryControlsContainer}>
        <SecondaryButton buttonType={'Select'} />
        <SecondaryButton buttonType={'Start'} />
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  abButtonsContainer: {
    flex: 1,
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
