import React, { memo } from 'react';
import { PanResponderInstance, StyleSheet, View } from 'react-native';

import { turquoise } from '../../../../../assets/AnimationOpening/stylesColorsCode';
import { DirectionalCross } from './DirectionalCross';
import { ArrowType } from './DirectionalCross/DirectionalArrow/types';
import { PrimaryButton } from './PrimaryButton/index';
import { SecondaryButton } from './SecondaryButton/index';

export interface GameControlComponentProps {
  redirectToGameScreen: () => void;
  panResponder: PanResponderInstance;
  isPressed: false | ArrowType;
}

const GameControlsComponent = ({
  redirectToGameScreen,
  panResponder,
  isPressed,
}: GameControlComponentProps) => {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.primaryControlsContainer}>
        <DirectionalCross panResponder={panResponder} isPressed={isPressed} />
        <View style={styles.abButtonsContainer}>
          <PrimaryButton buttonType={'B'} />
          <PrimaryButton buttonType={'A'} />
        </View>
      </View>
      <View style={styles.secondaryControlsContainer}>
        <SecondaryButton buttonType={'Select'} />
        <SecondaryButton buttonType={'Start'} onPress={redirectToGameScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    flex: 1,
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
