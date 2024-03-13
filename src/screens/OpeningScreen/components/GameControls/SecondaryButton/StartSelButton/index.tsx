import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

// import { useGameDisplay } from '../../../GameDisplay/useGameDisplay';
import { StartSelButtonProps } from './types';

const StartSelButtonComponent = ({ buttonType }: StartSelButtonProps) => {
  // const { gameStateSetter } = useGameDisplay();

  const imageSource =
    buttonType === 'Start'
      ? require('../../../../../../../assets/GameControls/buttonStart.png')
      : require('../../../../../../../assets/GameControls/buttonSelect.png');

  return (
    <FastImage
      style={styles.image}
      source={imageSource}
      resizeMode={FastImage.resizeMode.contain}
    />
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export const StartSelButton = memo(StartSelButtonComponent);
