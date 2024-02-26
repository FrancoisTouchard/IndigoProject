import React from 'react';
import {memo} from 'react';
import {Text, View} from 'react-native';
import {useSplashScreen} from './useSplashScreen';

const SplashScreenComponent = () => {
  useSplashScreen();

  return (
    <View>
      <Text>Hello yeah ça biche</Text>
    </View>
  );
};

export const SplashScreen = memo(SplashScreenComponent);
