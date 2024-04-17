import React, { memo, useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { GameStatesTypes } from '../useGameStateManager';

interface AnimationOpeningProps {
  gameState: GameStatesTypes;
}

const AnimationOpeningComponent = ({ gameState }: AnimationOpeningProps) => {
  const opacityFirstImage = useRef(new Animated.Value(0)).current;
  const opacitySecondImage = useRef(new Animated.Value(0)).current;
  const opacityThirdImage = useRef(new Animated.Value(0)).current;

  const fadeInAnimation = {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  };

  const fadeOutAnimation = {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  };

  const pauseAnimation = {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  };

  const launchAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityFirstImage, fadeInAnimation),
      Animated.timing(opacityFirstImage, pauseAnimation),
      Animated.timing(opacityFirstImage, fadeOutAnimation),
      Animated.timing(opacitySecondImage, fadeInAnimation),
      Animated.timing(opacitySecondImage, pauseAnimation),
      Animated.timing(opacitySecondImage, fadeOutAnimation),
      Animated.timing(opacityThirdImage, fadeInAnimation),
    ]).start();
  };

  useEffect(() => {
    launchAnimation();
  }, []);

  if (gameState !== 'AnimationOpening') return null;

  return (
    <>
      <Animated.View style={[styles.image, { opacity: opacityFirstImage }]}>
        <FastImage
          style={styles.image}
          source={require('../../../../../../assets/AnimationOpening/titre.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Animated.View>
      <Animated.View style={[styles.image, { opacity: opacitySecondImage }]}>
        <FastImage
          style={styles.image}
          source={require('../../../../../../assets/AnimationOpening/gameFreakLogo1.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Animated.View>
      <Animated.View style={[styles.image, { opacity: opacityThirdImage }]}>
        <FastImage
          style={styles.image}
          source={require('../../../../../../assets/AnimationOpening/startingImage.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const AnimationOpening = memo(AnimationOpeningComponent);
